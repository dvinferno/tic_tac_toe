function App() {
  /*----- constants -----*/
  const winningCombos = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  /*----- app's state (variables) -----*/
  const [board, setBoard] = React.useState([
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
  ]);

  let gameOver = false;

  const [turn, setTurn] = React.useState("X")
  let win;

  function handleTurn(event) {
    console.log(event.target, event.target.id);

    let index = event.target.id;

    if (gameOver == false) {
      let newBoard = [...board];
      newBoard[index] = turn;
      board[index] = turn;
      setBoard(newBoard);
      setTurn(turn === "X" ? "O" : "X");
      //win = getWinner();
    }
  }

  return (
    <div>
      <h1>Tic-React-Toe</h1>
      <h2>It's {turn}'s turn!</h2>

      <div class="flex-container flex-column">
        <div class="flex-container flex-wrap" id="board" onClick={handleTurn}>
          {board.map((value, index) => {
            return (
              <div class="square" key={index} id={index}>
                {value}
              </div>
            );
          })}
        </div>
        <button id="reset-button">Reset</button>
      </div>
    </div>
  );
}

ReactDOM.render(<App />, root);
