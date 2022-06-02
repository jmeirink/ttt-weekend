/*-------------------------------- Constants --------------------------------*/
const winningCombos = [[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [2, 5, 8], [1, 4, 7], [0, 4, 8], [2, 4, 6]]


/*---------------------------- Variables (state) ----------------------------*/
let board = [null, null, null, null, null, null, null, null, null]
let turn = 1
let winner = null


/*------------------------ Cached Element References ------------------------*/
const squareEls = document.querySelectorAll('.square')
const messageEl = document.querySelector('#message')


/*----------------------------- Event Listeners -----------------------------*/
squareEls.forEach(function(square) {
  square.addEventListener('click', handleClick)
})

/*-------------------------------- Functions --------------------------------*/
init()
function init() {
 
  render()
}

function render() {
  board.forEach(function(square, idx) {
    if (square === 1) {
      squareEls[idx].textContent = 'X'
    } else if (square === -1) {
      squareEls[idx].textContent = '0'
    } else {
      squareEls[idx].textContent = null
    }

    if (winner === null) {
      messageEl.textContent = `It is the next player's turn.`
    } else if (winner === 'T') {
      messageEl.textContent = `It is a tie.`
    } else {
      messageEl.textContent = `We have a winner!`
    }
  })
}

function handleClick(evt) {
  const sqIdx = parseInt(evt.target.id.slice(2))
  console.log(sqIdx)
  if (board[sqIdx] !== null){
    return `Square has been taken`
  } else if (winner !== null) {
    return `Game is over`
  }

  board[sqIdx] = turn
  turn = turn * -1

  getWinner()
  render()
}

function getWinner() {
  for (let i = 0; i < winningCombos.length; i++) {
    let sum = board[winningCombos[i][0]] + board[winningCombos[i][1]] + board[winningCombos[i][2]]
    console.log(sum)
    if (sum === 3) {
      return 1
    } else if (sum === -3) {
      return -1
    } else if (board.includes(null) === false) {
      return 'T'
    }
  }
}

