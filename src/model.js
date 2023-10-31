import { uri } from "../api"

export const state = {
    musics: [],
    music: {},
    foundMusics: [],
    latestMusics: [],
    bestMusics: []
}


try {
    await fetch(uri + "musics")
    .then(res => res.json())
    .then(data => state.musics = data.reverse())
    .then(() => {
        state.latestMusics = state.musics.slice(state.musics.length - 6, state.musics.length);
    })
} catch(err) {
    alert(err.message);
}


class Actions {

    async getMusics(uri, data) {
        try {
            await fetch(uri)
            .then(res => res.json())
            .then(d => data = d)
        } catch(err) {
            alert(err.message);
        }
    }

    async getMusic(id) {
        try {
            await fetch(uri + "musics/" + id)
            .then(res => res.json())
            .then(data => state.music = data)
        } catch(err) {
            alert(err.message);
        }
    }
    
}

export const Action = new Actions();