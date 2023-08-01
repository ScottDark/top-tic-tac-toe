loadEventListeners();

/* Prevent default on submit for player names form
   Loads event listeners on page load */
function loadEventListeners() {
  document.addEventListener("submit", (e) => {
    e.preventDefault();
  });
}

/* Store game board data */
function setGameBoard() {
  const gameBoardData = [];

  gameLogic(gameBoardData);
}

/* Player constructor */
function Player(name, side) {
  this.name = name;
  this.side = side;
}

/* Game logic  to determine winner*/
function gameLogic(gameBoardData) {}

/* Start new game button */
function startNewGame() {}

/* Display game winner */
function displayGameWinner() {}
