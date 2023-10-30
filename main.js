import "./src/style.css";
import "./src/views/template";
import Header from "./src/components/Header";
import Footer from "./src/components/Footer";
import MusicPlayer from "./src/components/MusicPlayer";
import * as model from "./src/model";


Header.render(model.state);
MusicPlayer.render(model.state.latestMusics);
Footer.render();
