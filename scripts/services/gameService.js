import { boardData, createBoardData, resetBoard } from "../data/boardData.js";
import { board, drawBoard } from "./domService.js";

let player1 = '';
let player2 = '';
let winner = '';
let turn = '';

const startGame = () => {
    player1 = prompt('please enter name player 1 (X)');
    player2 = prompt('please enter name player 2 (O)');
    turn = player1;
}

const turnMove = () => {
    turn = turn === player1 ? player2 : player1;
}

const check = (rowsNum) => {
    let res = false;

    let rows = ['_'];['x', '_', '_']
    let cols = ['_'];
    let diagonalTopL = ['_'];
    let diagonalTopR = ['_'];
    let rowStr = `${turn} `.repeat(rowsNum - 1) + turn;

    // fill rows & cols
    for (let i = 0; i < rowsNum; i++) {
        rows.push([]);
        cols.push([]);
    }
    Object.keys(boardData).forEach((key) => {
        rows[key[0]].push(boardData[key]);
        cols[key[2]].push(boardData[key]);
    });

    // check horyzontal
    rows.forEach((row, index) => {
        if (index > 0 && row.join(' ') === rowStr) {
            res = true;
        }
    });

    // check vertical
    cols.forEach((row, index) => {
        if (index > 0 && row.join(' ') === rowStr) {
            res = true;
        }
    });

    // fill diagonls
    rows.forEach((row, index) => {
        index > 0 && diagonalTopL.push(row[index - 1]);
    });
    rows.reverse().forEach((row, index) => {
        index < rows.length - 1 && diagonalTopR.push(row[index]);
    });

    // check top-left diagonal
    diagonalTopL.forEach((item, index) => {
        if (index > 0 && diagonalTopL.slice(1, diagonalTopL.length).join(' ') === rowStr) {
            res = true;
        }
    });

    // check top-right diagonal
    diagonalTopR.forEach((item, index) => {
        if (index > 0 && diagonalTopR.slice(1, diagonalTopR.length).join(' ') === rowStr) {
            res = true;
        }
    });

    // check winner
    if (res) {
        winner = turn;
        alert(`${turn} wins!!!`);
        resetGame(rowsNum);
    }
}

const resetGame = (rowsNum) => {
    winner = '';
    board.innerHTML = '';

    resetBoard();
    createBoardData();
    createBoardData(rowsNum, rowsNum);
    drawBoard(rowsNum, rowsNum);
    startGame();
}

export { player1, player2, turn, winner, startGame, turnMove, check };
