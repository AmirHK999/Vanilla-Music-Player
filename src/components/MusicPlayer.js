import { likeMusic } from "../../main";

class MusicPlayer {
    musics;
    music;
    main = document.querySelector("main");
    loggedInUser = localStorage.getItem("loggedInUser");

    render(musics, music) {
        this.main.innerHTML = "";
        this.musics = musics;
        this.music = music;

        this.generateMarkup();
        console.log(this.musics);
        console.log(music);
    }

    generateMarkup() {
        const markup = /*html*/
        `
        <ul class="musicPlayer lg:mt-[80px] md:mt-0 sm:mt-[100px] max-sm:mt-[100px] mx-auto lg:w-[60%] md:w-[85%] sm:w-[80%] max-sm:w-[82%] grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 max-sm:grid-cols-1 gap-5">
          
          <li class="player grid items-center text-center p-5 rounded-lg aspect-square border border-zinc-300 shadow-lg dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-950">
            <img src="${this.music?.poster}" class="mx-auto w-[80%] aspect-square rounded-full">
            <p class="mt-3 text-zinc-800 dark:text-zinc-300">${this.music?.title}</p>
            <p class="mb-2 text-zinc-400 dark:text-zinc-600">${this.music?.artist}</p>

            <div class="mx-auto flex grid-cols-1 gap-3 my-1 text-center">
              <div class="flex gap-2 text-zinc-800 dark:text-zinc-300">
                <button id="likeBtn"><i class="fa ${ this.music?.likedBy.includes(this.loggedInUser) ? 'fa-heart text-red-500' : 'fa-heart-o' }"></i></button>
                <p>${ this.music?.likedBy.length }</p>
              </div>              
            </div>

            <div class="mx-auto p-2 flex grid-cols-4 gap-1">
              <button class="backward col-span-1 w-[50px] aspect-square rounded-full border border-zinc-500 dark:text-zinc-300 dark:border-zinc-800">
                <i class="fa fa-backward"></i>
              </button>

              <div class="col-span-2">
              </div>
  

              <button class="forward col-span-1 w-[50px] aspect-square rounded-full border border-zinc-500 dark:text-zinc-300 dark:border-zinc-800">
                <i class="fa fa-forward"></i>
              </button>
            </div>
          </li>

          <li class="list mb-[100px] overflow-y-scroll text-center p-3 aspect-square border border-zinc-300 shadow-lg dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-950">
            <ul class="mx-auto grid grid-cols-1 justify-center items-center border border-zinc-300 shadow-lg dark:border-zinc-700 bg-zinc-50 dark:bg-zinc-950">
              ${ 
                this.musics?.map((music) => {
                    return(/*html*/
                    `
                      <li id="${music.id}" class="musicItem cursor-pointer p-2 grid grid-cols-3 border-b border-zinc-300 dark:border-zinc-700 ${ music?.id == parseInt(window.location.hash.slice(1)) ? 'bg-zinc-200 dark:bg-zinc-800' : 'hover:bg-zinc-200 hover:dark:bg-zinc-800' }">
                        <div class="col-span-2 grid grid-cols-2 justify-start items-center">
                          <img src="${music.poster}" class="w-[70%] aspect-square">
                          <div>
                            <p class="text-sm text-zinc-800 dark:text-zinc-300">${music.title}</p>
                            <p class="text-sm text-zinc-400 dark:text-zinc-600">${music.artist}</p>
                          </div>
                        </div>

                        <div class="col-span-1 flex grid-cols-1 justify-end items-center mr-3">
                          <div class="flex gap-2 text-zinc-800 dark:text-zinc-300">
                            <button><i class="fa fa-heart"></i></button>
                            <p>${ music?.likedBy.length }</p>
                          </div>    
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

        document.querySelector("#likeBtn").addEventListener("click", likeMusic);
    }
}

export default new MusicPlayer();