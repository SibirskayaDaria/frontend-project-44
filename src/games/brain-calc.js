#!/usr/bin/env node

import generateRandomInt from '../utils.js';
import playGame from '../index.js';

const gameDescription = 'What is the result of the expression?';

const generateExpression = () => {
  const operators = ['+', '-', '*'];
  const generatedExpressionIndex = generateRandomInt(0, 3);
  return operators[generatedExpressionIndex];
};

const getResultOfExpression = (integer1, integer2, expression) => {
  let result;

  switch (expression) {
    case '+':
      result = integer1 + integer2;
      break;
    case '-':
      result = integer1 - integer2;
      break;
    case '*':
      result = integer1 * integer2;
      break;
    default:
      break;
  }

  return result;
};
const generateRound = () => {
  const randomInt1 = generateRandomInt(1, 11);
  const randomInt2 = generateRandomInt(1, 11);
  const randomExpression = generateExpression();
  const question = `${randomInt1} ${randomExpression} ${randomInt2}`;

  const correctAnswer = String(getResultOfExpression(randomInt1, randomInt2, randomExpression));
  return [question, correctAnswer];
};

const start = () => {
  playGame(generateRound, gameDescription);
};
export default start;
