loadGame();

/* Load the game necessary to start playing. */
function loadGame() {
  getPlayerNames();
  getGameBoardCells();
  attachStartGameListener();
}

function attachStartGameListener() {
  const startGameButton = document.getElementById("start-game-button");
  startGameButton.addEventListener("click", startNewGame);
}

/* Get player names from form. */
function getPlayerNames() {
  document.addEventListener("submit", (e) => {
    e.preventDefault();
    determinePlayerName();
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
};

const PLAYER_O = {
  name: "Player O",
  side: "O",
};

let currentPlayerTurn = PLAYER_X.side; // Start with Player X's turn

let gameWon = false;

/* Control flow of the game.*/
function gameController(cell) {
  if (gameWon) {
    return;
  }

  let checkCellEmpty = isCellEmpty(cell);
  const CELL_IS_EMPTY = "Empty";

  if (checkCellEmpty === CELL_IS_EMPTY) {
    placeMarkOnBoard(cell);
    if (checkForWinner(currentPlayerTurn)) {
      gameWon = true;
      displayGameWinner(currentPlayerTurn);
    } else if (isBoardFull()) {
      gameWon = true;
      displayDraw();
    } else {
      currentPlayerTurn =
        currentPlayerTurn === PLAYER_X.side ? PLAYER_O.side : PLAYER_X.side;
    }
  }
}

/* Place marker on board depending on whose turn it is */
function placeMarkOnBoard(cell) {
  cell.textContent = currentPlayerTurn;
}

/* Determines if game has ended. */
function checkForWinner(currentPlayerTurn) {
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
      return true;
    }
  }

  return false;
}

/* Determine if cell on board is empty */
function isCellEmpty(cell) {
  return cell.textContent === "" ? "Empty" : "Full";
}

/* Check if the game board is full */
function isBoardFull() {
  const cells = document.querySelectorAll("#game-board > div");
  for (const cell of cells) {
    if (isCellEmpty(cell) === "Empty") {
      return false;
    }
  }
  return true;
}

function displayGameWinner(winner) {
  const gameWinnerElement = document.querySelector("#game-winner");
  if (winner === PLAYER_X.side) {
    gameWinnerElement.textContent = `${PLAYER_X.name} wins!`;
  } else {
    gameWinnerElement.textContent = `${PLAYER_O.name} wins!`;
  }
}

function displayDraw() {
  const gameWinnerElement = document.querySelector("#game-winner");
  gameWinnerElement.textContent = "DRAW!";
}

/* Start new game button */
function startNewGame() {
  gameWon = false;
  resetGameboard();
  resetPlayerTurns();
}

/* Reset game board */
function resetGameboard() {
  const SELECT_GAMEBOARD = document.querySelector("#game-board");
  const SELECT_GAMEBOARD_CELL =
    SELECT_GAMEBOARD.querySelectorAll(":scope > div");

  SELECT_GAMEBOARD_CELL.forEach((cell) => {
    cell.textContent = "";
  });

  const gameWinnerElement = document.querySelector("#game-winner");
  gameWinnerElement.textContent = "";
}

/* Reset player turn counters */
function resetPlayerTurns() {
  currentPlayerTurn = PLAYER_X.side;
}

function determinePlayerName() {
  const PLAYER_X_NAME = document.querySelector("#player-x-name").value;
  const PLAYER_O_NAME = document.querySelector("#player-o-name").value;

  if (PLAYER_X_NAME === "" || PLAYER_O_NAME === "") {
    // Do Nothing, leave default names.
  } else {
    PLAYER_X.name = PLAYER_X_NAME;
    PLAYER_O.name = PLAYER_O_NAME;
  }
}
