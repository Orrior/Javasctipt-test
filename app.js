import { Game } from "./game/game.js";
import { RoadFactory } from "./domain/road.js";
import { RoadUI } from "./domain/roadUI.js";

console.log("Game starting....");

let uiGameBoard = document.querySelector("#app");

let backgroundDiv = document.createElement('div')
backgroundDiv.className="backgroundContainer"
uiGameBoard.appendChild(backgroundDiv)

let game = new Game();

for (let index = RoadFactory.MAP_ROWS - 1; index >= 0; index--) {
    backgroundDiv.appendChild(RoadUI.uiAddGameRow(game.state.map[index]));
}

setInterval(() => {
    backgroundDiv.lastChild.remove()
    game.addNewMapRow();
    backgroundDiv.prepend(RoadUI.uiAddGameRow(game.state.map[RoadFactory.MAP_ROWS - 1]));

}, 25);
