class Footer {

    footer = document.querySelector("footer");

    render() {
        this.generateMarkup();
    }

    generateMarkup() {
        const markup =  /*html*/
        `
        <nav class="w-full fixed bottom-0 left-0 mx-auto shadow-md text-center backdrop-blur-lg bg-zinc-100 border-t border-zinc-300 text-zinc-500 dark:shadow-none dark:bg-black dark:border-zinc-800 dark:text-zinc-400 p-4 grid grid-cols-4 items-center">
          
          <div class="col-span-1 text-start">
            <button id="sidebarToggleBtn" class="ml-3">
              <i class="fa fa-bars"></i>
            </button>
          </div>

          <div class="col-span-2 flex grid-cols-2 mx-auto">
            <input placeholder="Search for a music" class="rounded-lg p-1 w-[100%] border border-zinc-400 dark:bg-zinc-700 dark:text-white dark:border-zinc-500" />
            <button class="ml-2">
              <i class="fa fa-search"></i>
            </button>
          </div>

          <div class=" col-span-1 text-end">
            <button id="toggleThemeBtn" class="mr-3">
              <i class="fa fa-adjust"></i>
            </button>
          </div>

        </nav>

        `

        this.footer.innerHTML = "";
        this.footer.insertAdjacentHTML("afterbegin", markup);

    }
}

export default new Footer();