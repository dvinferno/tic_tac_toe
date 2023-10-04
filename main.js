/*----- constants -----*/
/*----- app's state (variables) -----*/
let board;
let turn = "X";

/*----- cached element references -----*/
const squares = Array.from(document.querySelectorAll("#board div"));

/*----- event listeners -----*/
document.getElementById("board").addEventListener("click", handleTurn);

/*----- functions -----*/
function render() {
  board.forEach(function (mark, index) {
    squares[index].textContent = mark;
  });
}

function handleTurn(event) {
  let index = squares.findIndex(function (square) {
    return square === event.target;
  });

  board[index] = turn;
  console.log(board);
}

function init() {
  board = ["", "", "", "", "", "", "", "", ""];
  render();
}

init();
