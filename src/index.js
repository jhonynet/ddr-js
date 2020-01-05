import {Game} from "./game";
import './style/main.scss';

let gameContainer = document.getElementById('game');

let game;
// Create new game and wait for it to be ready to use
game = new Game(gameContainer, function () {
    game._ui.disable();
    // Load the song we want to play
    game.loadSong('songs/Idol/Idol.sm', function () {
        game._ui.enable();
    });
});
window.game = game;