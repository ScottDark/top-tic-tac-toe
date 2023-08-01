loadEventListeners();

/* Prevent default on submit for player names form
   Loads event listeners on page load */
function loadEventListeners() {
  const playerForm = document.querySelector("#player-name-form");
  playerForm.addEventListener("submit", (e) => {
    e.preventDefault();
    getPlayerNames();
  });
}

/* Get player names */
function getPlayerNames() {
  let playerXName = document.querySelector("#player-x");
  let playerOName = document.querySelector("#player-o");

  setPlayerData(playerXName, playerOName);
}

/* Set player information from form */
function setPlayerData(playerXName, playerOName) {
  const playerX = {
    name: playerXName,
    side: "X",
  };

  const playerO = {
    name: playerOName,
    side: "O",
  };
}

/* Store game board data */
function setGameBoard() {
  let gameBoardData = [];

  gameLogic(gameBoardData);
}

/* Game logic  to determine winner*/
function gameLogic(gameBoardData) {}

/* Start new game button */
function startNewGame() {}

/* Display game winner */
function displayGameWinner() {}
