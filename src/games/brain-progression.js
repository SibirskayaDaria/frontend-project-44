#!/usr/bin/env node
import generateRandomInt from '../utils.js';
import playGame from '../index.js';

const progressionLength = 10;
const gameDescription = 'What number is missing in the progression?';

const getAritmeticProgression = () => {
  let progressionNumber = generateRandomInt(0, 50);
  const step = generateRandomInt(2,5);
  const progression = [];

  for (let i = 0;i < progressionLength; i += 1) {
    progression.push(progressionNumber);
    progressionNumber += step;
  }
  return progression;
}

const startBrainCalcCore = () => {
  const progression = getAritmeticProgression();
  const randomIndex = generateRandomInt(0, progressionLength);

  const correctAnswer = String(progression[randomIndex]);
  progression[randomIndex] = '..';
  const question = progression;

  return [question, correctAnswer];
};

const start = () => {
  playGame(startBrainCalcCore, gameDescription);
};

export default start;
