const h2 = document.querySelector('h2');
const startBtn = document.getElementById('startBtn');
const stopBtn = document.getElementById('stopBtn');

const randomColor = function () {
  const hexCode = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    const hexCodeIndex = Math.floor(Math.random() * hexCode.length);
    color += hexCode[hexCodeIndex];
  }
  return color;
};

let colorInterval;
const startChangingColor = function () {
  function changeColor() {
    h2.innerHTML = randomColor();
    document.body.style.backgroundColor = randomColor();
  }

  if (!colorInterval) {
    //conditional statement for null
    colorInterval = setInterval(changeColor, 1000);
  }
};

const stopChangingColor = function () {
  clearInterval(colorInterval);
  colorInterval = null; // clean code
};

startBtn.addEventListener('click', startChangingColor);

stopBtn.addEventListener('click', stopChangingColor);
