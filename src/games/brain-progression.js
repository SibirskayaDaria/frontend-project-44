import generateRandomInt from '../utils.js';
import playGame from '../index.js';

const progressionLength = 10;
const gameDescription = 'What number is missing in the progression?';

const getGcd = (firstNumber, step) => {
  let progressionNumber = generateRandomInt(0, 50);
  const progression = [];

  for (let i = 0; i < progressionLength; i += 1) {
    progression.push(progressionNumber);
    progressionNumber += step;
  }
  return progression;
};

const startBrainCalcCore = () => {
  const firstNumber = generateRandomInt(0, 50);
  const step = generateRandomInt(1, 5);
  const progression = getGcd(firstNumber, step);
  const randomIndex = generateRandomInt(0, progressionLength);

  const correctAnswer = String(progression[randomIndex]);
  progression[randomIndex] = '..';
  const questionOutput = progression.join(' ');
  const question = `${questionOutput}`;

  return [question, correctAnswer];
};

const start = () => {
  playGame(startBrainCalcCore, gameDescription);
};

export default start;
