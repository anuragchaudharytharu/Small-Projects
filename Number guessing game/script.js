const min = 50;
const max = 100;
const answer = Math.floor(Math.random() * (max - min + 1)) + min;

let attempts = 0;
let guess;
let running = true;

while (running) {
  guess = window.prompt(`Guess a number betweeen ${min} - ${max}`);
  guess = Number(guess);

  if (isNaN(guess)) {
    window.alert('Please enter a valid nnumber');
  } else if (guess < min || guess > max) {
    window.alert('Please enter a valid nnumber');
  } else {
    attempts++;
    if (guess < answer) {
      alert('Too low! Try again');
    } else if (guess > answer) {
      alert('Too high! Try again');
    } else {
      alert(
        `Correct! The answer was ${answer}. It took you ${attempts} attempts`
      );
      running = false;
    }
  }
}
