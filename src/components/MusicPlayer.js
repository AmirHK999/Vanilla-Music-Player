class MusicPlayer {

    main = document.querySelector("main");

    render() {
        this.generateMarkup();
    }

    generateMarkup() {
        const markup = /*html*/
        `
        <ul class="musicPlayer mx-auto mt-64 p-10 bg-zinc-50 w-[90%] grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 max-sm:grid-cols-1">
          <li class="text-center">
            
          </li>

          <li class="text-center">
            
          </li>
        </ul>
        `

        this.main.innerHTML = "";
        this.main.insertAdjacentHTML("afterbegin", markup);
    }
}

export default new MusicPlayer();