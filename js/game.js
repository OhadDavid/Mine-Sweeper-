'use strict'

//– A Matrix containing cell objects: Each 
// var cell: { minesAroundCount: 4,
//      isShown: true,
//       isMine: false,
//        isMarked: true }
const EMPTY = '🟪';
const MINE = '💣'
const images=[MINE]

var gLevel = {
    SIZE: 4,
    MINES: 2
};
var gGame = {
    isOn: false,
    shownCount: 0,
    markedCount: 0,
    secsPassed: 0
}


var gBoard;

function init() {
    console.log('hello')
    gBoard = buildBoard()
    // createPacman(gBoard);
    // createGhosts(gBoard);
    printMat(gBoard, '.board-container')
    gGame.isOn = true
    //  createCherry(gBoard);
}

function buildBoard() {
    var SIZE = 4;
    var board = [];
    for (var i = 0; i < SIZE; i++) {
        board.push([]);
        for (var j = 0; j < SIZE; j++) {
            var cell = {
                MinesCountAround: 4,
                isShown: true,
                isMine: false,
                isMarked: true
            };
            board[i][j] = cell
            console.log(board.cell[0][0]);
        
            

                // if (i === 0 || i === SIZE - 1 ||
                //     j === 0 || j === SIZE - 1 ||
                //     (j === 3 && i > 4 && i < SIZE - 2)) {
                //  board[i][j] = WALL;
                // }
            }
        }
        console.table(board);

        return board;
    }


    // TODO: click on a TD with LIFE upgrade to SUPER_LIFE and never dies
function cellClicked(elCell, cellI, cellJ) {
    // if (elCell.classList.contains('occupied')) {

    // }
    // if (elCell.innerText === LIFE) {

    // }
    if (gBoard[cellI][cellJ] === LIFE) {

        //model
        gBoard[cellI][cellJ] = SUPER_LIFE
        //dom
        elCell.innerText = SUPER_LIFE

        blowUpNegs(cellI, cellJ, gBoard)
    }


}
