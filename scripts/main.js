import { createBoardData } from "./data/boardData.js";
import { drawBoard } from "./services/domService.js";
import { startGame } from "./services/gameService.js";

const num = prompt('pleaese enter number of rows');
createBoardData(+num, +num);
drawBoard(+num, +num);
startGame();
