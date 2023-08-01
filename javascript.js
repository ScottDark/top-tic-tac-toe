loadEventListeners();

/* Prevent default on submit for player names form */
function loadEventListeners() {
  document.addEventListener("submit", (e) => {
    e.preventDefault();
  });
}
