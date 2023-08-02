loadEventListeners();

/* Prevent default on submit for player names form
   Loads event listeners on page load */
function loadEventListeners() {
  document.addEventListener("submit", (e) => {
    e.preventDefault();
    getPlayerNames();
  });
}

/* Get player names */
function getPlayerNames() {
  const formGetPlayerNames = document.querySelector("#player-name-form");

  setPlayerData(formGetPlayerNames);
}

/* Set player information from form */
function setPlayerData(playerName) {
  let playerXName = playerName.playerxname.value;
  let playerOName = playerName.playeroname.value;

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
