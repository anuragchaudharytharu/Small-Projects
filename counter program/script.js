const countLabel = document.getElementById('countLabel');
const decreaseBtn = document.getElementById('decreaseBtn');
const resetBtn = document.getElementById('resetBtn');
const increaseBtn = document.getElementById('increaseBtn');

let counter = 0;

decreaseBtn.addEventListener('click', () => {
  counter--;
  countLabel.textContent = counter;
});

resetBtn.addEventListener('click', () => {
  counter = 0;
  countLabel.textContent = counter;
});

increaseBtn.addEventListener('click', () => {
  counter++;
  countLabel.textContent = counter;
});
