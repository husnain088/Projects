const board = document.getElementById('board');
const cells = document.querySelectorAll('.cell');
const result = document.getElementById('result');
const resetButton = document.getElementById('reset');

let currentPlayer = 'X';
let moves = 0;
let gameEnded = false;

// Add event listeners to cells
cells.forEach(cell => {
    cell.addEventListener('click', handleCellClick);
});

// Reset game
resetButton.addEventListener('click', resetGame);

// Handle cell click event
function handleCellClick(e) {
    const cell = e.target;
    const cellIndex = parseInt(cell.dataset.id);

    // If cell is already marked or game is ended, return
    if (cell.textContent || gameEnded) return;

    // Mark the cell
    cell.textContent = currentPlayer;
    moves++;

    // Check for win
    if (checkWin(currentPlayer)) {
        result.textContent = `Player ${currentPlayer} wins!`;
        gameEnded = true;
    } else if (moves === 9) {
        result.textContent = "It's a draw!";
        gameEnded = true;
    } else {
        // Switch player
        currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
    }
}

// Check for win
function checkWin(player) {
    const winConditions = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ];

    return winConditions.some(condition => {
        return condition.every(index => {
            return cells[index].textContent === player;
        });
    });
}

// Reset game
function resetGame() {
    cells.forEach(cell => {
        cell.textContent = '';
    });
    result.textContent = '';
    currentPlayer = 'X';
    moves = 0;
    gameEnded = false;
}
