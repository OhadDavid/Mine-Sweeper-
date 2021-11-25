'use strict'

//– A Matrix containing cell objects: Each 
// var cell: { minesAroundCount: 4,
//      isShown: true,
//       isMine: false,
//        isMarked: true }



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
    renderBoard(gBoard)
    gGame.isOn = true
}

function buildBoard() {
    var SIZE = 4;
    var board = [];

    for (var i = 0; i < SIZE; i++) {
        board.push([]);
        for (var j = 0; j < SIZE; j++) {

            var cell = {
                MinesCountAround: 4,
                isShown: false,
                isMine: false,
                isMarked: false,
                images: ['🟪', '🟦', '💣']
            }
            board[i][j] = cell

        }
    }
    console.table(board);
    var randMinesCells = []
    for (var h = 0; h < gLevel.MINES; h++) {
        //  randMinesCells.push(getRandomEmptyCell())
    }
    console.log('randobj', randMinesCells);
    console.log('randobj', gLevel.MINES);

    board[0][0].isShown = true
    board[0][0].isMine = true
    board[3][3].isShown = true
    board[3][3].isMine = true
    console.table(board[0][0].isMine);

    return board;
}

function renderBoard(board) {
    var strHTML = '<table border="1"><tbody>'

    // console.table(board);
    for (var i = 0; i < board.length; i++) {
        strHTML += '<tr>'
        for (var j = 0; j < board[0].length; j++) {
            var cell = board[i][j].images[0]
            //  console.log('boardij is mine');
            if (board[i][j].isMine === true && board[i][j].isShown === true) { cell = board[i][j].images[2] }
            var className = (cell.isMine) ? `cellismine${i}${j} cell${i}${j}` : `cell${i}${j}`
            strHTML += `
            <td data-i="${i}" data-j="${j}" onclick="cellClicked(this, ${i}, ${j})" class="${className}" >
                ${cell}
            </td>
            `

        }
        strHTML += '</tr>'
    }
    strHTML += '</tbody></table>';
    var elBoard = document.querySelector('.board-container')
    elBoard.innerHTML = strHTML
    // var eltdStartImage=document.querySelectorAll('td')
    // eltdStartImage.innerText=EMPTY
}

function cellClicked(elCell, cellI, cellJ) {
  
    if (gBoard[cellI][cellJ].isMine) {

        //model
        gBoard[cellI][cellJ].isShown = true
        //dom
        elCell.innerText = MINE
    }


}
