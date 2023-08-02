loadEventListeners();

/* Prevent default on submit for player names form
   Loads event listeners on page load */
function loadEventListeners() {
  document.addEventListener("submit", (e) => {
    e.preventDefault();
    setPlayerData();
    document.querySelector(".player-name-status").removeAttribute("hidden");
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
    turnCounter: 0,
  };

  const playerO = {
    name: "Player O",
    side: "O",
    turnCounter: 0,
  };
  // If no entered names use default else use names from form.
  if (
    playerName.playerxname.value === "" ||
    playerName.playeroname.value === ""
  ) {
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
  // Determine next players turn.
  let currentPlayerTurn = determinePlayerTurn(player);
  // Determines if turn is complete.
  let isGameComplete = gameProgress();

  // Determines if X or O should be placed on board then ends turn.
  // Game continues.
  while (isGameComplete === false) {
    if (cell.textContent === "") {
      if (currentPlayerTurn === "X") {
        cell.textContent = "X";
        currentPlayerTurn = determinePlayerTurn(player);
      } else {
        cell.textContent = "O";
        currentPlayerTurn = determinePlayerTurn(player);
      }
    } else {
      console.log("Turn is complete.");
      // Continue the game - Start here next day.
      break;
    }
  }
}

/* Determine players turn. */
function determinePlayerTurn(player) {
  // Count if it is the player turn. If X counter is higher it is O's turn
  // if not it is X's turn.
  let playerTurn;

  if (player.playerX.turnCounter <= player.playerO.turnCounter) {
    console.log("Player X's turn.");
    player.playerX.turnCounter++;
    playerTurn = "X";
  } else {
    console.log("Player O's turn.");
    player.playerO.turnCounter++;
    playerTurn = "O";
  }
  return playerTurn;
}

/* Game in progress (used to determine when game is ended) */
function gameProgress() {
  let isGameComplete = false;

  return isGameComplete;
}

/* Start new game button */
function startNewGame() {}

/* Display game winner */
function displayGameWinner() {}
