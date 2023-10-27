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

  const [gameOver, setGameOver] = React.useState(false)
  const [turn, setTurn] = React.useState("X")
  const [win, setWin] = React.useState(null)

  function getWinner() {
    let winner = null;
  
    winningCombos.forEach(function (combo, index) {
      if (
        board[combo[0]] &&
        board[combo[0]] === board[combo[1]] &&
        board[combo[0]] === board[combo[2]]
      )
        winner = board[combo[0]];
    });
  
    return winner ? winner : board.includes("") ? null : "T";
  }

  function handleTurn(event) {
    let index = event.target.id;

    if (gameOver == false) {
      let newBoard = [...board];
      newBoard[index] = turn;
      board[index] = turn;
      setBoard(newBoard);
      setTurn(turn === "X" ? "O" : "X");
      let winner = getWinner();
      setWin(winner);
      if (winner) {
        setGameOver(true)
      }
      console.log(win);
    }
  }

  return (
    <div>
      <h1>Tic-React-Toe</h1>
      <h2>It's {turn}'s turn!</h2>
      <h2>{gameOver? `${win} wins the game!` : `It's ${turn}'s turn!`}</h2>

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
