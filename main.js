import "./src/style.css";
import "./src/views/template";
import Header from "./src/components/Header";
import Footer from "./src/components/Footer";
import MusicPlayer from "./src/components/MusicPlayer";
import * as model from "./src/model";



if(!window.location.hash || parseInt(window.location.hash.slice(1)) > model.state.musics.length || parseInt(window.location.hash.slice(1)) < 1) {
    window.location.hash = model.state.musics.length;
}


let id = parseInt(window.location.hash.slice(1));

model.Action.getMusic(id)
.then(() => {
    MusicPlayer.render(model.state.latestMusics, getMusic, model.state.music);
    Footer.render(model.state.music);

})


const getMusic = () => {

    if(!window.location.hash || parseInt(window.location.hash.slice(1)) > model.state.musics.length || parseInt(window.location.hash.slice(1)) < 1) {
        window.location.hash = model.state.musics.length;
    }

    id = window.location.hash.slice(1);

    if(id) {
        id = parseInt(id);

        model.Action.getMusic(id)
        .then(() => {
            MusicPlayer.render(model.state.latestMusics, getMusic, model.state.music);
            Footer.render(model.state.music);

            document.querySelector(".audioPlayer").autoplay = true;
            console.log(document.querySelector(".playBtn"))
        })
    }
}


Header.render(model.state);


window.addEventListener("load", getMusic);
window.addEventListener("hashchange", getMusic);