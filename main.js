import "./src/style.css";
import "./src/views/template";
import Header from "./src/components/Header";
import Footer from "./src/components/Footer";
import MusicPlayer from "./src/components/MusicPlayer";
import * as model from "./src/model";


if ("loggedInUser" in localStorage) {
    null;
} else {
    localStorage.setItem("loggedInUser", Math.floor(Math.random() * 10000000000));
}


if (!window.location.hash || parseInt(window.location.hash.slice(1)) > model.state.musics.length || parseInt(window.location.hash.slice(1)) < 1) {
    window.location.hash = model.state.musics.length;
}


let loggedInUser = localStorage.getItem("loggedInUser");
let id = parseInt(window.location.hash.slice(1));

//initial fetching

model.Action.getMusic(id)
    .then(() => {
        MusicPlayer.render(model.state.latestMusics, model.state.music);
        Footer.render(model.state.music);

        document.querySelector(".audioPlayer").addEventListener("ended", () => {
            window.location.hash = parseInt(window.location.hash.slice(1)) + 1;

            if (parseInt(window.location.hash.slice(1)) == model.state.musics.length + 1) {
                window.location.hash = 1;
            }
        })
    })



//fetch selected music

const getMusic = () => {

    if (!window.location.hash || parseInt(window.location.hash.slice(1)) > model.state.musics.length || parseInt(window.location.hash.slice(1)) < 1) {
        window.location.hash = model.state.musics.length;
    }

    id = parseInt(window.location.hash.slice(1));

    model.Action.getMusic(id)
        .then(() => {
            Header.render(model.state.musics);
            MusicPlayer.render(model.state.latestMusics, model.state.music);
            Footer.render(model.state.music);

            document.querySelector(".audioPlayer").autoplay = true;

            document.querySelector(".audioPlayer").addEventListener("ended", () => {
                window.location.hash = parseInt(window.location.hash.slice(1)) + 1;

                if (parseInt(window.location.hash.slice(1)) == model.state.musics.length + 1) {
                    window.location.hash = 1;
                }
            })
        })
}




//rendering header
Header.render(model.state.musics);


//search system
let searchInput = "";

document.querySelector("#searchInput").addEventListener("change", (event) => {
    searchInput = event.target.value;

    if (event.target.value == "") {
        MusicPlayer.render(model.state.latestMusics, model.state.music);
    }
})

const searchMusic = () => {
    if (searchInput == "") {
        MusicPlayer.render(model.state.latestMusics, model.state.music);
    } else {
        model.state.foundMusics = model.state.musics.filter((music) => {
            if (music?.title.includes(searchInput) || music?.title.toUpperCase().includes(searchInput) || music?.title.toLowerCase().includes(searchInput)) {
                return music;
            }
        })

        MusicPlayer.render(model.state.foundMusics, model.state.music);
    }
}

document.querySelector("#searchBtn").addEventListener("click", searchMusic);
document.querySelector("#searchInput").addEventListener("keyup", (event) => {
    if(event.key == "Enter") {
        searchMusic();
    }
})




//admin system
let titleInput = "";
let linkInput = "";
let artistInput = "";
let posterInput = "";
let descrInput = "";

document.querySelector("#titleInput").addEventListener("change", (event) => {
    titleInput = event.target.value;
})

document.querySelector("#linkInput").addEventListener("change", (event) => {
    linkInput = event.target.value;
})

document.querySelector("#artistInput").addEventListener("change", (event) => {
    artistInput = event.target.value;
})

document.querySelector("#posterInput").addEventListener("change", (event) => {
    posterInput = event.target.value;
})

document.querySelector("#descrInput").addEventListener("change", (event) => {
    descrInput = event.target.value;
})

export const addMusic = async () => {
    if(titleInput != "" && posterInput != "" && linkInput != "" && artistInput != "") {
        model.Action.addMusic({
            id: `${ Math.floor(Math.random() * 10000000000) }`,
            title: titleInput,
            link: linkInput,
            poster: posterInput,
            artist: artistInput,
            description: descrInput,
            tags: [],
            likedBy: []
        })
        .then(async () => {
            await model.Action.getMusics();
        })
        .then(() => {
            Header.render(model.state.musics);
            MusicPlayer.render(model.state.latestMusics, model.state.music);
        })
    }
}

export const deleteMusic = async (id) => {
        model.Action.deleteMusic(id)
        .then(async () => {
            await model.Action.getMusics();
        })
        .then(() => {
            Header.render(model.state.musics);
            MusicPlayer.render(model.state.latestMusics, model.state.music);
        })
}



//like system
export const likeMusic = async () => {

    if (!model.state.music.likedBy.includes(loggedInUser)) {

        model.state.music.likedBy = [
            ...model.state.music.likedBy,
            loggedInUser
        ]

    } else {

        model.state.music.likedBy = model.state.music.likedBy.filter((user) => {
            if(user != loggedInUser) {
                return user;
            }
        })
    }

    await model.Action.likeMusic(id, {
        ...model.state.music,
        likedBy: model.state.music.likedBy
    })
    .then(async () => {
        await model.Action.getMusics();
    })
        .then(() => {
            MusicPlayer.render(model.state.latestMusics, model.state.music);
            Footer.render(model.state.music);
        })
}


window.addEventListener("load", getMusic);
window.addEventListener("hashchange", getMusic);