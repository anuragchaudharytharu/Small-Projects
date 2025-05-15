boxes = document.querySelector('.box');
resetBtn = document.querySelector('.resetBtn');
newGameBtn = document.querySelector('.newGameBtn');

let turnPlayerO = true;

boxes.forEach((box) => {
  box.addEventListener('click', () => {
    if (turnPlayerO) {
      boxBtn.innerHTML = 'O';
      turnPlayerO = false;
    } else {
      boxBtn.innerHTML = 'X';
      turnPlayerO = true;
    }
    btn.disabled = true;
  });
});
