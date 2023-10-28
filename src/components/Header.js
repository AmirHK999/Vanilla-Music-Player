class Header {

    header = document.querySelector("header");

    render() {
        this.generateMarkup();
    }

    generateMarkup() {
        const markup =  /*html*/
        `
        <nav class="w-full mx-auto shadow-md text-center backdrop-blur-lg bg-zinc-100 border-b border-zinc-300 text-zinc-500 dark:shadow-none dark:bg-black dark:border-zinc-800 dark:text-zinc-400 p-4 grid grid-cols-4 items-center">
          <div class="col-span-1 text-start">
            <button class="ml-3">
              <i class="fa fa-bars"></i>
            </button>
          </div>
          <div class="col-span-2 flex grid-cols-2 mx-auto">
            <input placeholder="Search for a music" class="rounded-xl p-1 border border-zinc-400 dark:bg-zinc-700 dark:text-white dark:border-zinc-500" />
            <button class="ml-2">
              <i class="fa fa-search"></i>
            </button>
          </div>
          <div class=" col-span-1 text-end">
            <button class="mr-3">
              <i class="fa fa-adjust"></i>
            </button>
          </div>
        </nav>
        `

        this.header.innerHTML = "";
        this.header.insertAdjacentHTML("afterbegin", markup);
    }
}

export default new Header;