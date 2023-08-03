loadGame();

/* TO DO:
Player objects get deleted after submitting because they go out of scope.
The same thing happens after I click a square with no names. The default
objects get deleted because the program ends and everything becomes out
of scope and is released from memory after a click ends or names are 
submitted.

Solution:
Figure out how to prevent the objects from going out of scope when names
are submitted
&&
figure out how to keep the objects in scope after a cell is clicked.

Fix:
Make objects global variables
Have a database to read and write from so they can be loaded on demand.

We are not working with external storage besides memory yet so we have to
either do global variables to keep them in scope or find a way to keep
the program running while the page is open.*/

/* Load the game necessary to start playing. */
function loadGame() {
  getPlayerNames();
  getGameBoardCells();
}

/* Get player names from form. */
function getPlayerNames() {
  document.addEventListener("submit", (e) => {
    e.preventDefault();

    const PLAYER_FORM = document.querySelector("#player-name-form");
    createPlayerObjects(PLAYER_FORM);
  });
}

/* Get all div on the gameboard for game logic. */
function getGameBoardCells() {
  const SELECT_GAMEBOARD = document.querySelector("#game-board");
  const SELECT_GAMEBOARD_CELL =
    SELECT_GAMEBOARD.querySelectorAll(":scope > div");

  SELECT_GAMEBOARD_CELL.forEach((cell) => {
    cell.addEventListener("click", () => {
      gameLogic(cell);
    });
  });
}

/* Creates two player objects to distinguish each player. */
function createPlayerObjects(PLAYER_FORM) {
  const player_X = {
    name: "Player X",
    side: "X",
    turnCounter: 0,
  };

  const player_O = {
    name: "Player O",
    side: "O",
    turnCounter: 0,
  };

  determinePlayerName(PLAYER_FORM, player_X, player_O);

  return { player_X, player_O };
}

/* Use default name or user inputted name from form. */
function determinePlayerName(PLAYER_FORM, player_X, player_O) {
  const PLAYER_X_NAME = document.querySelector("#player-x-name").value;
  const PLAYER_O_NAME = document.querySelector("#player-o-name").value;

  if (PLAYER_X_NAME === "" || PLAYER_O_NAME === "") {
    // Do Nothing, leave default names.
  } else {
    player_X.name = PLAYER_X_NAME;
    player_O.name = PLAYER_O_NAME;
  }
}

/* Game logic to control game flow.*/
function gameLogic(cell) {
  const PLAYER = createPlayerObjects();
  let isGameComplete = gameProgress();

  // Game continues until game is completed.

  let currentPlayerTurn = determinePlayerTurn(PLAYER);

  let checkCellEmpty = isCellEmpty(cell);
  const CELL_IS_EMPTY = "Empty";

  if (checkCellEmpty === CELL_IS_EMPTY) {
    placeMarkOnBoard(cell, currentPlayerTurn);
  }
}

/* Place marker on board depending on whose turn it is */
function placeMarkOnBoard(cell, currentPlayerTurn) {
  if (currentPlayerTurn === "X") {
    cell.textContent = "X";
  } else {
    cell.textContent = "O";
  }
}

/* Determine if cell on board is empty or not. */
function isCellEmpty(cell) {
  let checkCellEmpty;
  if (cell.textContent === "") {
    checkCellEmpty = "Empty";
  } else {
    checkCellEmpty = "Full";
  }
  return checkCellEmpty;
}

/* Determine whose turn it is to play. */
function determinePlayerTurn(PLAYER) {
  let currentPlayerTurn;
  let player_X_TurnCounter = PLAYER.player_X.turnCounter;
  let player_O_TurnCounter = PLAYER.player_O.turnCounter;

  // X always plays first.
  if (player_X_TurnCounter === player_O_TurnCounter) {
    PLAYER.player_X.turnCounter++;
    currentPlayerTurn = "X";
  } else {
    PLAYER.player_O.turnCounter++;
    currentPlayerTurn = "O";
  }
  return currentPlayerTurn;
}

/* Determines if game has ended. */
function gameProgress() {
  let isGameComplete = false;

  return isGameComplete;
}

/* Start new game button */
function startNewGame() {}

/* Display game winner */
function displayGameWinner() {}
