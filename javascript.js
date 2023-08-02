loadEventListeners();

/* Prevent default on submit for player names form
   Loads event listeners on page load */
function loadEventListeners() {
  document.addEventListener("submit", (e) => {
    e.preventDefault();
    setPlayerData();
  });

  const selectGameBoard = document.querySelector("#game-board");
  const getGameBoardCell = selectGameBoard.querySelectorAll(":scope > div");

  getGameBoardCell.forEach((cell) => {
    cell.addEventListener("click", () => {
      gameLogic(cell);
    });
  });
}

/* Set player information from form */
function setPlayerData() {
  const playerName = document.querySelector("#player-name-form");

  // Default with no player names entered.
  const playerX = {
    name: "Player X",
    side: "X",
  };

  const playerO = {
    name: "Player O",
    side: "O",
  };
  // If no entered names use default else use names from form.
  if (playerX.name === "Player X" || playerO.name === "Player O") {
    // Nothing - Use default player names.
  } else {
    playerX.name = playerName.playerxname.value;
    playerO.name = playerName.playeroname.value;
  }

  return { playerX, playerO };
}

/*  */

/* Game logic  to determine winner*/
function gameLogic(cell) {
  const player = setPlayerData();
  if (cell.value === undefined) {
    cell.textContent = "X";
  } else {
    // Do Nothing
  }
}

/* Start new game button */
function startNewGame() {}

/* Display game winner */
function displayGameWinner() {}
