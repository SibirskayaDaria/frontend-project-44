import generateRandomInt from '../utils.js';
import playGame from '../index.js';

const gameDescription = 'Find the greatest common divisor of given numbers.';

const getGCD = (randomInt1, randomInt2) => {
  if (randomInt1 === 0 || randomInt2 === 0) {
    return randomInt1 + randomInt2;
  }
  if (randomInt1 > randomInt2) {
    return getCorrectAnswer(randomInt1 - randomInt2, randomInt2);
  }
  return getCorrectAnswer(randomInt1, randomInt2 - randomInt1);
};
const startBrainGcdCore = () => {
  const randomInt1 = generateRandomInt(1, 100);
  const randomInt2 = generateRandomInt(1, 100);
  const question = `${randomInt1} ${randomInt2}`;
  const correctAnswer = String(getGCD(randomInt1, randomInt2));

  return [question, correctAnswer];
};

const start = () => {
  playGame(startBrainGcdCore, gameDescription);
};

export default start;
