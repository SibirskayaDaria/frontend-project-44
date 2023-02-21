import readlineSync from 'readline-sync';

function getRandomInt(max) {
    return Math.floor(Math.random() * max) ;
  }
  const isnumberEven = (userName) => {
    console.log('Answer "yes" if the number is even, otherwise answer "no".');
  
    let i = 0;
    while (i <= 3) {
      if (i === 3) {
        console.log (`Congratulations,${userName}!`);
        break;
      }
      const number = getRandomInt(100);  
      const answer = readlineSync.question(`Question:${number} \n`);
      if (answer === "yes" && number % 2 === 0) {
        console.log('Correct!');
        i += 1;
      } 
      else if (answer === "no" && number % 2 > 0) {
      console.log('Correct!');
      i += 1;
      } 
      else {
      const oppositAnswer = answer === 'yes' ? 'no' : 'yes';
      console.log(`${answer} is wrong answer ;(. Correct answer was ${oppositAnswer}. Let's try again`);
      break;
    }
    }
  }
    export default isnumberEven;  
    