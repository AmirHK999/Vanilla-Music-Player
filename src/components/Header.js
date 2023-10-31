class Header {

    header = document.querySelector("header");
    musics;

    render(musics) {
        this.header.innerHTML = "";
        this.musics = musics;
        this.generateMarkup();

        //sidebar
        let sidebarToggleBtn = document.querySelector("#sidebarToggleBtn");
        let sidebar = document.querySelector("#sidebarBackdrop");
        let adminToggleBtn = document.querySelector("#adminToggleBtn");
        let admin = document.querySelector("#adminBackdrop");

        const toggleSidebar = () => {
            if(sidebar.classList.contains("hidden")) {
                sidebar.classList.remove("hidden");
            } else {
                sidebar.classList.add("hidden");
            }
        }

        const toggleAdmin = () => {
            if(admin.classList.contains("hidden")) {
                admin.classList.remove("hidden");
            } else {
                admin.classList.add("hidden");
            }
        }

        document.querySelector(".sidebar").addEventListener("click", (event) => event.stopPropagation());

        sidebarToggleBtn.addEventListener("click", toggleSidebar);
        sidebar.addEventListener("click", toggleSidebar);

        document.querySelector(".admin").addEventListener("click", (event) => event.stopPropagation());

        adminToggleBtn.addEventListener("click", toggleAdmin);
        admin.addEventListener("click", toggleAdmin);


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
            <input id="searchInput" placeholder="Search for a music" class="rounded-lg p-1 w-[100%] border border-zinc-400 dark:bg-zinc-700 dark:text-white dark:border-zinc-500" />
            <button id="searchBtn" class="ml-2">
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
              <li id="adminToggleBtn" class="mt-5 p-3 cursor-pointer bg-zinc-300 hover:bg-zinc-200 dark:hover:bg-zinc-600 duration-300 dark:bg-zinc-700 dark:text-zinc-400 rounded-lg">Add Songs<li>
            </ul>
          </div>
        </div>


        <div id="adminBackdrop" class="backdrop fixed top-0 left-0 z-40 w-full h-screen backdrop-blur-sm grid justify-center items-center hidden">
        <div class="admin w-[300px] aspect-square rounded-md mx-auto text-center bg-zinc-400 text-zinc-600 border border-zinc-200 dark:text-zinc-400 dark:bg-zinc-800 dark:border-zinc-700">
          <div class="pt-5">

          </div>
          <ul class="mx-auto w-[90%] mt-5 text-center grid gap-5">
            <li><input id="titleInput" placeholder="Title" class="rounded-lg p-1 w-[100%] border border-zinc-400 dark:bg-zinc-700 dark:text-white dark:border-zinc-500" /></li>
            <li><input id="linkInput" placeholder="Link" class="rounded-lg p-1 w-[100%] border border-zinc-400 dark:bg-zinc-700 dark:text-white dark:border-zinc-500" /></li>
            <li><input id="artistInput" placeholder="Artist" class="rounded-lg p-1 w-[100%] border border-zinc-400 dark:bg-zinc-700 dark:text-white dark:border-zinc-500" /></li>
            <li><input id="posterInput" placeholder="Poster" class="rounded-lg p-1 w-[100%] border border-zinc-400 dark:bg-zinc-700 dark:text-white dark:border-zinc-500" /></li>
            <li><input id="descrInput" placeholder="Description" class="rounded-lg p-1 w-[100%] border border-zinc-400 dark:bg-zinc-700 dark:text-white dark:border-zinc-500" /></li>
            <li id="addMusicBtn" class="p-3 cursor-pointer bg-zinc-300 hover:bg-zinc-200 dark:hover:bg-zinc-600 duration-300 dark:bg-zinc-700 dark:text-zinc-400 rounded-lg">Add Song<li>
          </ul>

          <div class="adminList overflow-y-scroll text-center p-3 aspect-square border border-zinc-300 shadow-lg dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-950">
            <ul class="mx-auto grid grid-cols-1 justify-center items-center border border-zinc-300 shadow-lg dark:border-zinc-700 bg-zinc-50 dark:bg-zinc-950">
              ${ 
                this.musics?.map((music) => {
                    return(/*html*/
                    `
                      <li class="adminMusicItem cursor-pointer p-2 grid grid-cols-3 border-b border-zinc-300 dark:border-zinc-700 ${ music?.id == parseInt(window.location.hash.slice(1)) ? 'bg-zinc-200 dark:bg-zinc-800' : 'hover:bg-zinc-200 hover:dark:bg-zinc-800' }">
                        <div class="col-span-2 grid grid-cols-2 justify-start items-center">
                          <img src="${music.poster}" class="w-[70%] aspect-square">
                          <div>
                            <p class="text-sm text-zinc-800 dark:text-zinc-300">${music.title}</p>
                            <p class="text-sm text-zinc-400 dark:text-zinc-600">${music.artist}</p>
                          </div>
                        </div>

                        <div class="col-span-1 flex grid-cols-1 justify-end items-center mr-3">
                          <div class="flex gap-2 text-zinc-800 dark:text-zinc-300">
                            <button id="${music.id}" class="deleteMusicBtn"><i class="fa fa-trash"></i></button>
                          </div>    
                        </div>
                      </li>
                    `
                    )
                }).join("")
              }
            </ul>
          </div>
        </div>
      </div>
        `

        this.header.innerHTML = "";
        this.header.insertAdjacentHTML("afterbegin", markup);
    }
}

export default new Header();