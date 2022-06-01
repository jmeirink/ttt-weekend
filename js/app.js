// Call this `init` function when the app loads.
init()

/*-------------------------------- Constants --------------------------------*/
const winningCombos = [];


/*---------------------------- Variables (state) ----------------------------*/
// Set the board variable to an array containing nine nulls to represent empty squares.
let board = [null, null, null, null, null, null, null, null, null]

// Set the turn to 1 - which will represent player X.
let turn = 1

// Set the winner to null.
let winner = null


/*------------------------ Cached Element References ------------------------*/
// In a constant called squareEls, store the nine elements representing the squares on the page.
const squareEls = document.querySelectorAll('#sq0', '#sq1', '#sq2', '#sq3', '#sq4', '#sq5', '#sq6', '#sq7', '#sq8')


// In a constant called messageEl, store the element that displays the game’s status on the page.
const messageEl = document.getElementById('message')


/*----------------------------- Event Listeners -----------------------------*/



/*-------------------------------- Functions --------------------------------*/
// Create a function called `init`.
// Call this `init` function when the app loads. (Line 2)
function init() {
  
  
  // Call a function called render at the end of the init function.
  render()
}

// Create a function called render
function render() {
  // Loop over board and for each element:
  board.forEach((square, idx) => {
    // Use the current index of the iteration to access the corresponding square in the squareEls array.
    if (square === -1) {
      squareEls[idx].textContent = 'O'
    } else if (square === 1) {
      squareEls[idx].textContent = 'X'
    } else {
      squareEls[idx].textContent = null
    }
  })

  // if (winner === null) {
  //   return turn = 
  // }
}