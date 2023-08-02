loadEventListeners();

/* Prevent default on submit for player names form
   Loads event listeners on page load */
function loadEventListeners() {
  document.addEventListener("submit", (e) => {
    e.preventDefault();
    getPlayerNames();
  });

  const selectGameBoard = document.querySelector("#game-board");
  const getGameBoardCell = selectGameBoard.querySelectorAll(":scope > div");

  getGameBoardCell.forEach((cell) => {
    cell.addEventListener("click", () => {
      setGameBoard(cell);
    });
  });
}

/* Get player names from form*/
function getPlayerNames() {
  const formGetPlayerNames = document.querySelector("#player-name-form");

  setPlayerData(formGetPlayerNames);
}

/* Set player information from form */
function setPlayerData(playerName) {
  const playerX = {
    name: playerName.playerxname.value,
    side: "X",
  };

  const playerO = {
    name: playerName.playeroname.value,
    side: "O",
  };
}

/*  */

/* Store game board data */
function setGameBoard(cell) {
  let gameBoardData = [];

  if (cell.value === undefined || null) {
    cell.replaceChildren("X");
  }

  gameLogic(gameBoardData);
}

/* Game logic  to determine winner*/
function gameLogic(gameBoardData) {}

/* Start new game button */
function startNewGame() {}

/* Display game winner */
function displayGameWinner() {}
