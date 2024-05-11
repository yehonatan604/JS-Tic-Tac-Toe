import { boardData } from "../data/boardData.js";
import { check, player1, player2, turn, turnMove, winner } from "./gameService.js";

const board = document.getElementById('board');
let rowsNum;

const drawBoard = (rows, cols) => {
    rowsNum = rows;
    for (let r = 1; r <= rows; r++) {
        const row = document.createElement('div');
        row.className = 'row d-flex justify-content-center';

        for (let c = 1; c <= cols; c++) {
            const cell = document.createElement('div');
            cell.className = 'col-3 g-0 d-block w-auto m-1';

            const iconContainer = document.createElement('div');
            iconContainer.className = 'cell-container bg-light d-flex justify-content-center align-items-center';

            const icon = document.createElement('i');
            icon.id = `${r}_${c}`;

            iconContainer.addEventListener('click', () => {
                if (!winner && icon.className.length < 1) {
                    turn === player1 && (icon.className = `fa fa-close`);
                    turn === player2 && (icon.className = `fa fa-circle-o`);
                    boardData[icon.id] = turn;
                    check(rowsNum);
                    turnMove();
                }
            });

            iconContainer.appendChild(icon);
            cell.appendChild(iconContainer);
            row.appendChild(cell);
        }
        board.appendChild(row);
    }
}

export { board, drawBoard };