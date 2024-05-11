let boardData = {};

const createBoardData = (rows, cols) => {
    if (rows === cols) {
        for (let r = 1; r <= rows; r++) {
            for (let c = 1; c <= cols; c++) {
                boardData[`${r}_${c}`] = ''
            }
        }
    }
}

const resetBoard = () => {
    boardData = {};
}

export { boardData, createBoardData, resetBoard };