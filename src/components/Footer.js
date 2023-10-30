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
        <nav class="w-full fixed bottom-0 left-0 mx-auto shadow-md text-center backdrop-blur-lg bg-zinc-100 border-t border-zinc-300 text-zinc-500 dark:shadow-none dark:bg-black dark:border-zinc-800 dark:text-zinc-400 p-4 grid grid-cols-4 items-center">
          

        </nav>

        `

        this.footer.innerHTML = "";
        this.footer.insertAdjacentHTML("afterbegin", markup);

    }
}

export default new Footer();