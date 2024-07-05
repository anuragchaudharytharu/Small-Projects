const rolldiceBtn = document.getElementById('rolldiceBtn');
const numofDice = document.getElementById('numofDice').value;
const diceResult = document.getElementById('diceResult');
const diceImages = document.getElementById('diceImages');

const values = [];
const images = [];
rolldiceBtn.addEventListener('click', () => {
  for (let i = 0; i < numofDice; i++) {
    const value = Math.floor(Math.random() * 6) + 1;
    values.push(value);
    images.push(`<img src = 'Images/${value}.svg' id = 'images'/>`);
  }
  diceResult.textContent = `dice: ${values.join(', ')}`;
  diceImages.innerHTML = images.join('');
});
