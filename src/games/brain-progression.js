#!/usr/bin/env node

import generateRandomInt from '../src/utils.js';
import playGame from '../src/index.js';

const gameDescription = 'What number is missing in the progression?';
const progressionLength = 10;

const aritmeticProgression = () => {
    let progressionNumber = generateRandomInt(0, 50);
    const step = generateRandomInt (2,5);
    const progression = [];

for (let i = 0; i < progressionLength; i += 1) {
    progression.push(progressionNumber);
    progressionNumber += step;
  }
  return progression;
};

const getQuestionAndAnswer = () => {
  const progression = aritmeticProgression();
  const randomIndex = generateRandomInt(0, progressionLength);

  const correctAnswer = String(progression[randomIndex]);
  progression[randomIndex] = '..';
  const question = progression;

  return [question, correctAnswer];
};

const start = () => {
  playGame(getQuestionAndAnswer, gameDescription);
};
export default start;