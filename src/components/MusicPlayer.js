class MusicPlayer {
    latsetMusics;
    main = document.querySelector("main");

    render(state) {
        this.latsetMusics = state.latsetMusics;
        this.generateMarkup();
        console.log(state.musics);
    }

    generateMarkup() {
        const markup = /*html*/
        `
        <ul class="musicPlayer mx-auto mt-64 p-10 rounded-lg bg-zinc-50 border border-zinc-300 shadow-lg dark:bg-zinc-950 dark:border-zinc-800 w-[90%] grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 max-sm:grid-cols-1">
          
          <li class="player text-center">
            
          </li>

          <li class="list text-center">
            <ul>
              ${ this.latsetMusics }
            </ul>
          </li>

        </ul>
        `

        this.main.innerHTML = "";
        this.main.insertAdjacentHTML("afterbegin", markup);
    }
}

export default new MusicPlayer();