class Footer {

    footer = document.querySelector("footer");
    music;

    render(music) {
        this.footer.innerHTML = "";
        this.music = music;
        this.generateMarkup();
    }

    generateMarkup() {
        const markup =  /*html*/
        `
        <nav class="w-full fixed bottom-0 left-0 mx-auto shadow-md text-center backdrop-blur-lg bg-zinc-100 border-t border-zinc-300 text-zinc-500 dark:shadow-none dark:bg-black dark:border-zinc-800 dark:text-zinc-400 p-2 flex grid-cols-4 justify-center items-center">
          <audio controls class="audioPlayer mx-auto w-full h-[50px] rounded-full">
            <source src="${this.music?.link}" type="audio/mpeg">
          </audio>
        </nav>

        `

        this.footer.innerHTML = "";
        this.footer.insertAdjacentHTML("afterbegin", markup);

    }
}

export default new Footer();