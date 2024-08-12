const board = [
    ['', '', ''],
    ['', '', ''],
    ['', '', '']
]
let player1_turn = true;
function showBoard() {
    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
            let id = `cell_${i}_${j}`;
            let cell = document.getElementById(id);
            cell.innerHTML = board[i][j];
        }
    }
    let heading = document.getElementById('heading');
    if (player1_turn) {
        heading.innerHTML = 'Player1: X';

    } else {
        heading.innerHTML = 'Player2: O';
    }
}
function handleCellClick(event) {
    let cell = event.target;
    let id = cell.id;
    let parts = id.split('_');
    let i = parts[1];
    let j = parts[2];
    if (board[i][j] === '') {
        if (player1_turn === true) {
            board[i][j] = 'X';
            cell.classList.add('x')
            player1_turn = false;
        } else {
            board[i][j] = 'O';
            cell.classList.add('o')
            player1_turn = true;
        }
        showBoard();
        isGameOver();
    }
}

let player1_score = 0;
let player2_score = 0;
let draw = 0;

function hasWon(symbol) {
    if (board[0][0] == symbol && board[0][1] == symbol && board[0][2] == symbol) return true;
    if (board[1][0] == symbol && board[1][1] == symbol && board[1][2] == symbol) return true;
    if (board[2][0] == symbol && board[2][1] == symbol && board[2][2] == symbol) return true;
    if (board[0][0] == symbol && board[1][0] == symbol && board[2][0] == symbol) return true;
    if (board[0][1] == symbol && board[1][1] == symbol && board[2][1] == symbol) return true;
    if (board[0][2] == symbol && board[1][2] == symbol && board[2][2] == symbol) return true;
    if (board[0][0] == symbol && board[1][1] == symbol && board[2][2] == symbol) return true;
    if (board[0][2] == symbol && board[1][1] == symbol && board[2][0] == symbol) return true;
    return false;
}

function isTied() {
    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
            if (board[i][j] === '') {
                return false;
            }
        }
    }
    return true;
}

function isGameOver() {
    if (hasWon('X')) {
        alert('Player 1 wins!');
        player1_score++;
        document.getElementById('player1_score').innerHTML = player1_score;
        resetBoard();
    } else if (hasWon('O')) {
        alert('Player 2 wins!');
        player2_score++;
        document.getElementById('player2_score').innerHTML = player2_score;
        resetBoard();
    } else if (isTied()) {
        alert('It\'s a draw!');
        draw++;
        document.getElementById('draw').innerHTML = draw;
        resetBoard();
    }
}

function resetBoard() {
    board[0][0] = board[0][1] = board[0][2] = '';
    board[1][0] = board[1][1] = board[1][2] = '';
    board[2][0] = board[2][1] = board[2][2] = '';

    document.getElementById('cell_0_0').innerHTML = '';
    document.getElementById('cell_0_1').innerHTML = '';
    document.getElementById('cell_0_2').innerHTML = '';
    document.getElementById('cell_1_0').innerHTML = '';
    document.getElementById('cell_1_1').innerHTML = '';
    document.getElementById('cell_1_2').innerHTML = '';
    document.getElementById('cell_2_0').innerHTML = '';
    document.getElementById('cell_2_1').innerHTML = '';
    document.getElementById('cell_2_2').innerHTML = '';
    player1_turn = true;
    showBoard();
}
let cells = document.getElementsByClassName('cell');
for (let i = 0; i < cells.length; i++) {
    cells[i].addEventListener('click', handleCellClick);
}

showBoard();
