loadGame();

/* Load the game necessary to start playing. */
function loadGame() {
  getPlayerNames();
  getGameBoardCells();
}

/* Get player names from form. */
function getPlayerNames() {
  document.addEventListener("submit", (e) => {
    e.preventDefault();
    createPlayerObjects();
    hideModal();
  });
}

/* Hide modal on submit */
function hideModal() {
  const formModal = document.querySelector("#myModal");
  const modal = bootstrap.Modal.getInstance(formModal);
  modal.hide();
}

/* Get all div on the gameboard for game logic. */
function getGameBoardCells() {
  const SELECT_GAMEBOARD = document.querySelector("#game-board");
  const SELECT_GAMEBOARD_CELL =
    SELECT_GAMEBOARD.querySelectorAll(":scope > div");

  SELECT_GAMEBOARD_CELL.forEach((cell) => {
    cell.addEventListener("click", () => {
      if (!gameWon) {
        gameController(cell);
      }
    });
  });
}

const PLAYER_X = {
  name: "Player X",
  side: "X",
  turnCounter: 0,
};

const PLAYER_O = {
  name: "Player O",
  side: "O",
  turnCounter: 0,
};

/* Creates two player objects to distinguish each player. */
function createPlayerObjects() {
  determinePlayerName(PLAYER_X, PLAYER_O);

  return { player_X: PLAYER_X, player_O: PLAYER_O };
}

/* Use default name or user inputted name from form. */
function determinePlayerName(player_X, player_O) {
  const PLAYER_X_NAME = document.querySelector("#player-x-name").value;
  const PLAYER_O_NAME = document.querySelector("#player-o-name").value;

  if (PLAYER_X_NAME === "" || PLAYER_O_NAME === "") {
    // Do Nothing, leave default names.
  } else {
    player_X.name = PLAYER_X_NAME;
    player_O.name = PLAYER_O_NAME;
  }
}

let gameWon = false;

/* Control flow of the game.*/
function gameController(cell) {
  if (gameWon) {
    return;
  }

  const PLAYER = createPlayerObjects();
  let currentPlayerTurn = determinePlayerTurn(PLAYER);
  let checkCellEmpty = isCellEmpty(cell);
  const CELL_IS_EMPTY = "Empty";

  if (checkCellEmpty === CELL_IS_EMPTY) {
    placeMarkOnBoard(cell, currentPlayerTurn);
    if (checkForWinner(currentPlayerTurn)) {
      gameWon = true;
    }
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

/* Determines if game has ended. */
function checkForWinner(currentPlayerTurn) {
  let isGameComplete = false;

  const gameWinningSolutions = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  const cells = document.querySelectorAll("#game-board > div");

  // Loop through each winning solution to check if there is a winner
  for (const solution of gameWinningSolutions) {
    const [a, b, c] = solution;

    if (
      cells[a].textContent === currentPlayerTurn &&
      cells[b].textContent === currentPlayerTurn &&
      cells[c].textContent === currentPlayerTurn
    ) {
      // We have a winner!
      displayGameWinner(currentPlayerTurn);
      return true;
    }
  }

  return false;
}

/* Determine if cell on board is empty */
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

/* Start new game button */
function startNewGame() {}

function displayGameWinner(winner) {
  const gameWinnerElement = document.querySelector("#game-winner");
  if (winner === PLAYER_X.side) {
    gameWinnerElement.textContent = `${PLAYER_X.name} wins!`;
  } else {
    gameWinnerElement.textContent = `${PLAYER_O.name} wins!`;
  }
}
