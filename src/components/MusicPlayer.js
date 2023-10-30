import { state } from "../model";

class MusicPlayer {
    latsetMusics;
    music;
    getMusic;
    main = document.querySelector("main");

    render(latsetMusics, getMusic, music) {
        this.main.innerHTML = "";
        this.latsetMusics = latsetMusics;
        this.music = music;
        this.getMusic = getMusic;

        this.generateMarkup();
        console.log(this.latsetMusics);
        console.log(music);
    }

    generateMarkup() {
        const markup = /*html*/
        `
        <ul class="musicPlayer mx-auto my-[100px] lg:w-[70%] md:w-[85%] sm:w-[80%] max-sm:w-[82%] grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 max-sm:grid-cols-1 gap-5">
          
          <li class="player grid items-center text-center p-5 rounded-lg aspect-square border border-zinc-300 shadow-lg dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-950">
            <img src="${this.music?.poster}" class="mx-auto w-[80%] aspect-square rounded-full">
            <p class="mt-3 text-zinc-800 dark:text-zinc-300">${this.music?.title}</p>
            <p class="mb-2 text-zinc-400 dark:text-zinc-600">${this.music?.artist}</p>
            <div class="mx-auto p-2 flex grid-cols-4 gap-1">
              <button class="backward col-span-1 w-[50px] aspect-square rounded-full border border-zinc-500 dark:text-zinc-300 dark:border-zinc-800">
                <i class="fa fa-backward"></i>
              </button>

              <div class="col-span-2">
               <audio controls class="audioPlayer mx-auto w-[180px] h-[50px] rounded-full border border-zinc-600 dark:text-zinc-600 dark:border-zinc-800">
                <source src="${this.music?.link}" type="audio/mpeg">
               </audio>
              </div>
  

              <button class="forward col-span-1 w-[50px] aspect-square rounded-full border border-zinc-500 dark:text-zinc-300 dark:border-zinc-800">
                <i class="fa fa-forward"></i>
              </button>
            </div>
          </li>

          <li class="list overflow-y-scroll text-center p-3 aspect-square border border-zinc-300 shadow-lg dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-950">
            <ul class="mx-auto grid grid-cols-1 justify-center items-center border border-zinc-300 shadow-lg dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-950">
              ${ 
                this.latsetMusics?.map((music) => {
                    return(/*html*/
                    `
                      <li id="${music.id}" class="musicItem cursor-pointer p-2 grid grid-cols-3 border-b border-zinc-300 dark:border-zinc-800">
                        <div class="col-span-2 grid grid-cols-2 justify-start items-center">
                          <img src="${music.poster}" class="w-[70%] aspect-square">
                          <div>
                            <p class="text-sm text-zinc-800 dark:text-zinc-300">${music.title}</p>
                            <p class="text-sm text-zinc-400 dark:text-zinc-600">${music.artist}</p>
                          </div>
                        </div>

                        <div class="col-span-1">
                          
                        </div>
                      </li>
                    `
                    )
                }).join("")
              }
            </ul>
          </li>

        </ul>
        `

        this.main.innerHTML = "";
        this.main.insertAdjacentHTML("afterbegin", markup);

        document.querySelectorAll(".musicItem").forEach((item) => {
            item.addEventListener("click", () => {
                window.location.hash = item.id;
            })
        })

        document.querySelector(".backward").addEventListener("click", () => {
            if(parseInt(window.location.hash.slice(1)) > 1) {
                window.location.hash = parseInt(window.location.hash.slice(1)) - 1;
            }
        })

        document.querySelector(".forward").addEventListener("click", () => {
            window.location.hash = parseInt(window.location.hash.slice(1)) + 1;
        })
    }
}

export default new MusicPlayer();