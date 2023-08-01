loadEventListeners();

/* Prevent default on submit for player names form
   Loads event listeners on page load */
function loadEventListeners() {
  const playerForm = document.querySelector("#player-name-form");
  playerForm.addEventListener("submit", (e) => {
    e.preventDefault();
  });
}

/* Player constructor */
function Player(name, side) {
  this.name = name;
  this.side = side;
}

/* Get player names */
function getPlayerNames() {
  const player = document.querySelector("");

  setPlayerData();
}

/* Set player information from form */
function setPlayerData() {
  const player = new Player();
}

/* Store game board data */
function setGameBoard() {
  const gameBoardData = [];

  gameLogic(gameBoardData);
}

/* Game logic  to determine winner*/
function gameLogic(gameBoardData) {}

/* Start new game button */
function startNewGame() {}

/* Display game winner */
function displayGameWinner() {}
