'use strict'


function getRandomEmptyCell() {
  var emptyCells = []
  for (var i = 0; i < gBoard.length; i++) {
    for (var j = 0; j < gBoard[0].length; j++) {
      // if (gBoard[i][j] === EMPTY) {
       emptyCells.push({ i: i, j: j })
       //emptyCells.push({ i, j })
      // }
    }
  }
  var randIdx = getRandomInt(0, emptyCells.length)
  return emptyCells[randIdx]
}


function getRandomInt(min, max) {
  min = Math.ceil(min)
  max = Math.floor(max)
  return Math.floor(Math.random() * (max - min + 1)) + min; //INCLUSIVE
}