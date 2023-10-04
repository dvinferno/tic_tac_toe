/*----- constants -----*/
/*----- app's state (variables) -----*/
let board;

/*----- cached element references -----*/
const squares = Array.from(document.querySelectorAll('#board div'));

/*----- event listeners -----*/

/*----- functions -----*/
function render() {
  board.forEach(function (mark, index) {
    squares[index].textContent = mark;
  });
}

function init() {
  board = ["", "", "", "", "", "", "", "", ""];
  render();
}

init();
