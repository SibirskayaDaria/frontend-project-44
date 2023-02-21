import readlineSync from 'readline-sync';
 
const usernameQuestion = () => {
    const userName = readlineSync.question('May I have your name? ');
    console.log(`Hello ${userName}!`);
    return userName;
  };
  
  export default usernameQuestion;