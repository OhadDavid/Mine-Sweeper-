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
var gElmodal = document.querySelector('.modal')

var gBoard;
var gfirstClick=true

function init() {
    
    gElmodal.hidden = true
    console.log('hello')
    gBoard = buildBoard()
    renderBoard(gBoard)
}

function buildBoard() {
     
    var board = [];
    for (var i = 0; i < gLevel.SIZE; i++) {
        board.push([]);
        for (var j = 0; j < gLevel.SIZE; j++) {

            var cell = {
                MinesCountAround: 4,
                isShown: false,
                isMine: false,
                isMarked: false,
                images: ['🟪', '🚩', '💣']
            }

            board[i][j] = cell

        }
    }
    //console.log('gBoardL ', gBoard.length);
    console.log('randobj', gLevel.MINES);
    var randMinesCells = []
    for (var h = 0; h < gLevel.MINES; h++) {
        var random=getRandomEmptyCell()
        while(h>0&&random===randMinesCells[h-1]){
           random=getRandomEmptyCell
        }
        
        randMinesCells.push(random)
        console.log('tytu ',random);
         board[randMinesCells[h].i][randMinesCells[h].j].isMine = true
         console.log('randd ', board[randMinesCells[h].i][randMinesCells[h].j]);
    }

    // board[0][0].isShown = true
    // board[0][0].isMine = true
    // board[3][3].isShown = true
    // board[3][3].isMine = true
    // console.table(board[0][0].isMine);

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
function smileyButton() {
    init()
    document.querySelector('.smiley').innerHTML = '<img src="images/happysmiley.png" >'
}

function cellClicked(elCell, cellI, cellJ) {
    if (gfirstClick){
        gfirstClick=false
        gGame.isOn=true
         if(gBoard[cellI][cellJ.isMine]){
             randMinesCells.push(getRandomEmptyCell())
             gBoard[cellI][cellJ].isMine=false
            
         }
    }
     
    if (gBoard[cellI][cellJ].isMine) {

        //model
        gBoard[cellI][cellJ].isShown = true
        //dom
        elCell.innerText = gBoard[cellI][cellJ].images[2]
        gGame.isOn = false
        document.querySelector('.smiley').innerHTML = '<img src="images/sadsmiley.png" >'

        gElmodal.querySelector('h2 span').innerText = 'you lose, try again'
        gElmodal.hidden = false
    } else {
        gBoard[cellI][cellI] = true
        var minesAround = countNeighbors(cellI,cellJ)
        elCell.innerText = minesAround
        gGame.shownCount++
    }
       if( window.oncontextmenu===true)
       {
           gGame.markedCount++
           elCell.innerText = gBoard[cellI][cellI].images[1]

       }
       if(gGame.isMarked===gLevel.MINES&&gGame.isShown===gLevel.SIZE**2-gLevel.MINES){
           gGame.isOn=false
           gElmodal.querySelector('h2 span').innerText = 'you won:))'
        gElmodal.hidden = false
       }

    

}

function countNeighbors(cellI, cellJ) {
    var neighborsCount = 0;
    for (var i = cellI - 1; i <= cellI + 1; i++) {
        if (i < 0 || i >= gBoard.length) continue;
        for (var j = cellJ - 1; j <= cellJ + 1; j++) {
            if (i === cellI && j === cellJ) continue;
            if (j < 0 || j >= gBoard[i].length) continue;

            if (gBoard[i][j].isMine === true) neighborsCount++;
        }
    }
    return neighborsCount;
}

function getRandomEmptyCell() {
    var emptyCells = []
    for (var i = 0; i < gLevel.SIZE; i++) {
        for (var j = 0; j < gLevel.SIZE; j++) {
            // if (gBoard[i][j] === EMPTY) {
            emptyCells.push({ i: i, j: j })
            //  console.log('emptycells ',emptyCells);
            //emptyCells.push({ i, j })
        }

    }

    var randIdx = getRandomInt(0, emptyCells.length)
    
    return emptyCells[randIdx]
}
//new 20:15