class MusicPlayer {
    latsetMusics;
    main = document.querySelector("main");

    render(latsetMusics) {
        this.main.innerHTML = "";
        this.latsetMusics = latsetMusics;
        this.generateMarkup();
        console.log(this.latsetMusics);
    }

    generateMarkup() {
        const markup = /*html*/
        `
        <ul class="musicPlayer mx-auto my-[100px] lg:w-[70%] md:w-[85%] sm:w-[80%] max-sm:w-[82%] grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 max-sm:grid-cols-1 gap-5">
          
          <li class="player text-center p-5 rounded-lg aspect-square border border-zinc-300 shadow-lg dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-950">
            
          </li>

          <li class="list overflow-y-scroll text-center p-3 aspect-square border border-zinc-300 shadow-lg dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-950">
            <ul class="mx-auto grid grid-cols-1 justify-center items-center border border-zinc-300 shadow-lg dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-950">
              ${ 
                this.latsetMusics?.map((music) => {
                    return(/*html*/
                    `
                      <li id="${music.id}" class="p-2 grid grid-cols-3 border-b border-zinc-300 dark:border-zinc-800">
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
    }
}

export default new MusicPlayer();