const squares = document.querySelectorAll('.square');
const result = document.querySelector('#result');
const resetButton = document.querySelector('#reset-button');
let turn = 'X';

for (let i = 0; i < squares.length; i++) {
  squares[i].addEventListener('click', function() {
    if (squares[i].textContent === '') {
      squares[i].textContent = turn;
      checkForWinningConditions();
      if (turn === 'X') {
        turn = 'O';
      } else {
        turn = 'X';
      }
    }
  });
}

resetButton.addEventListener('click', function() {
  reset();
});

function checkForWinningConditions() {
  let winningCombinations = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ];
  
  for (let i = 0; i < winningCombinations.length; i++) {
    let [a, b, c] = winningCombinations[i];
    if (squares[a].textContent === turn && squares[b].textContent === turn && squares[c].textContent === turn) {
      result.textContent = `${turn} wins!`;
      disableClick();
      return;
    }
  }

  let gameDraw = true;
  for (let i = 0; i < squares.length; i++) {
    if (squares[i].textContent === '') {
      gameDraw = false;
      break;
    }
  }

  if (gameDraw) {
    result.textContent = 'Draw!';
    disableClick();
  }
}

function disableClick() {
  for (let i = 0; i < squares.length; i++) {
    squares[i].style.pointerEvents = 'none';
  }
}

function reset() {
  for (let i = 0; i < squares.length; i++) {
    squares[i].textContent = '';
    squares[i].style.pointerEvents = 'auto';
  }
  result.textContent = '';
  turn = 'X';
}
