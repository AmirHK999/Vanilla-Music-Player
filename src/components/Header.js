class Header {

    header = document.querySelector("header");

    render(a) {
        this.generateMarkup();

        console.log(a);
        //sidebar
        let sidebarToggleBtn = document.querySelector("#sidebarToggleBtn");
        let sidebar = document.querySelector("#sidebarBackdrop");


        const toggleSidebar = () => {
            if(sidebar.classList.contains("hidden")) {
                sidebar.classList.remove("hidden");
            } else {
                sidebar.classList.add("hidden");
            }
        }

        document.querySelector(".sidebar").addEventListener("click", (event) => event.stopPropagation());

        sidebarToggleBtn.addEventListener("click", toggleSidebar);
        sidebar.addEventListener("click", toggleSidebar);


        //theme
        if("theme" in localStorage) {
            null;
        } else {
            localStorage.setItem("theme", "light");
        }

        if(localStorage.getItem("theme") == "light") {
            document.documentElement.classList.remove("dark");

        } else if(localStorage.getItem("theme") == "dark") {
            document.documentElement.classList.add("dark");
        }

        document.querySelector("#toggleThemeBtn").addEventListener("click", () => {
            if(localStorage.getItem("theme") == "light") {
                document.documentElement.classList.add("dark");
                localStorage.setItem("theme", "dark");

            } else if(localStorage.getItem("theme") == "dark") {
                document.documentElement.classList.remove("dark");
                localStorage.setItem("theme", "light");
            }
        })
    }

    generateMarkup() {
        const markup =  /*html*/
        `
        <nav class="w-full fixed top-0 left-0 mx-auto shadow-md text-center backdrop-blur-lg bg-zinc-100 border-b border-zinc-300 text-zinc-500 dark:shadow-none dark:bg-black dark:border-zinc-800 dark:text-zinc-400 p-4 grid grid-cols-4 items-center">
          
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


        <div id="sidebarBackdrop" class="backdrop fixed top-0 left-0 z-40 w-full h-screen backdrop-blur-sm hidden">
          <div class="sidebar w-[240px] h-screen bg-zinc-400 text-zinc-600 border-r border-zinc-200 dark:text-zinc-400 dark:bg-zinc-800 dark:border-zinc-700">
            <div class="pt-5">
              <a href="https://amirhk888.vercel.app">
              <img src="./logo.jpg" class="mx-auto w-[100px] aspect-square rounded-full border border-zinc-500" />
              </a>
            </div>
            <ul class="mx-auto w-[90%] mt-5 text-center">
              <li class="mt-5 p-3 cursor-pointer bg-zinc-300 hover:bg-zinc-200 dark:hover:bg-zinc-600 duration-300 dark:bg-zinc-700 dark:text-zinc-400 rounded-lg">Add Songs<li>
            </ul>
          </div>
        </div>
        `

        this.header.innerHTML = "";
        this.header.insertAdjacentHTML("afterbegin", markup);

    }
}

export default new Header();