/*-------------------------------- Constants --------------------------------*/
const winningCombos = [[0, 1, 2],[3, 4, 5],[6, 7, 8],[0, 3, 6],[2, 5, 8],[1, 4, 7],[0, 4, 8],[2, 4, 6]]


/*---------------------------- Variables (state) ----------------------------*/
let board
let turn
let winner


/*------------------------ Cached Element References ------------------------*/
const squareEls = document.querySelectorAll('.square')
const messageEl = document.querySelector('#message')
const resetBtnEl = document.querySelector('.resetBtn')


/*----------------------------- Event Listeners -----------------------------*/
squareEls.forEach(square => {
  square.addEventListener('click', handleClick)
})
resetBtnEl.addEventListener('click', init)


/*-------------------------------- Functions --------------------------------*/
init()

function init() {
  board = [null, null, null, null, null, null, null, null, null]
  turn = 1
  winner = null
  render()
}

function render(){
  board.forEach((square, idx) => {
    if (board[idx] === 1) {
      squareEls[idx].textContent = 'X'
    } else if (board[idx] === -1) {
      squareEls[idx].textContent = 'O'
    } else {
      squareEls[idx].textContent = null
    }
  })
  
  if (winner === null) {
    messageEl.textContent = `Player ${turn === 1 ? "X" : "0"}'s turn!`
  } else if (winner === 'T') {
    messageEl.textContent = `It's a tie! Go Again!`
  } else if (winner === 1 || winner === -1) {
    messageEl.textContent = `Player ${winner === 1 ? "X" : "0"} wins!`
  } 
}

function handleClick(evt) {
  const sqIdx = parseInt(evt.target.id.slice(2))
  console.log(sqIdx)
  if (board[sqIdx] !== null){
    messageEl.textContent = 'This square has been taken! Choose a different one!'
  } else if (winner !== null){
    messageEl.textContent = 'Game Over!'
  } else { 
    board[sqIdx] = turn
    turn *= -1
    getWinner()
    render()
  }
}

function getWinner() {
  for (let i = 0; i < winningCombos.length; i++) {
    let sum = board[winningCombos[i][0]] + board[winningCombos[i][1]] + board[winningCombos[i][2]]
    if (sum === 3) {
      winner = 1
    } else  if (sum === -3) {
      winner = -1
    } else if (!board.includes(null) && !winner) {
      winner = 'T'
    }
}
}