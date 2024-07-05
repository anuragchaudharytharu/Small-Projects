const label1 = document.getElementById('label1');
const label2 = document.getElementById('label2');
const label3 = document.getElementById('label3');
const roll = document.getElementById('myButton');

const min = 1;
const max = 6;
let randomNumber1;
let randomNumber2;
let randomNumber3;

roll.addEventListener('click', function () {
  randomNumber1 = Math.floor(Math.random() * max) + min;
  randomNumber2 = Math.floor(Math.random() * max) + min;
  randomNumber3 = Math.floor(Math.random() * max) + min;
  label1.textContent = randomNumber1;
  label2.textContent = randomNumber2;
  label3.textContent = randomNumber3;
});
