'use strict';
console.log('app.js file is connected');

// creates person as global variable
let person;

function intro(){

   person = prompt('Hello! What is your name?');
    console.log('Person name is: ' + person);

  let game = prompt('Welcome, ' + person + '! Are you ready to play the game?').toLowerCase();
    console.log(person + ' said ' + game + ' to the game question!');

  if (game === 'yes'){
    alert('Good!');
  }

  if (game === 'no'){
    alert('Too bad!');
  }
}

intro();

let userPoints = 0;

alert('You currently have zero points! Here we go!');

function one (){
  let one = prompt('Do I have a dog named Riku?').toLowerCase();
  console.log(person + ' answered ' + one + ' to the first question!');

  if (one === 'yes'){
    console.log('Yes was the right answer!');
    userPoints += 1;
    alert ('Correct! He\'s a good boy!');
    console.log(person + ' now has ' + userPoints + ' points!');
    return;
  }
  if (one === 'no'){
    console.log('Yes was the right answer!');
    userPoints += 0;
    alert('Sorry, that\'s incorrect! No points!');
    console.log(person + ' now has ' + userPoints + ' points!');
    alert('You currently have ' + userPoints + ' points!');
    return
  } else  {
    alert('Try again with yes or no!');
    console.log(person + ' answered in the wrong format!');
    console.log(person + ' still has ' + userPoints + ' points!');
  }
}
one();

function two (){
  let two = prompt('Do I have a dog named Riku?').toLowerCase();
  console.log(person + ' answered ' + two + ' to the first question!');

  if (two === 'yes'){
    console.log('Yes was the right answer!');
    userPoints += 1;
    alert ('Correct! He\'s a good boy!');
    console.log(person + ' now has ' + userPoints + ' points!');
    return;
  }
  if (two === 'no'){
    console.log('Yes was the right answer!');
    userPoints += 0;
    alert('Sorry, that\'s incorrect! No points!');
    console.log(person + ' now has ' + userPoints + ' points!');
    alert('You currently have ' + userPoints + ' points!');
    return;
  } else {
    alert('Try again with yes or no!');
    console.log(person + ' answered in the wrong format!');
    console.log(person + ' still has ' + userPoints + ' points!');
  }
}
two();

function three(){
  let three = prompt('Do I have a dog named Riku?').toLowerCase();
  console.log(person + ' answered ' + three + ' to the first question!');

  if (three === 'yes'){
    console.log('Yes was the right answer!');
    userPoints += 1;
    alert ('Correct! He\'s a good boy!');
    console.log(person + ' now has ' + userPoints + ' points!');
    return;
  } else if(three === 'no'){
    console.log('Yes was the right answer!');
    alert('Sorry, that\'s incorrect! No points!');
    console.log(person + ' now has ' + userPoints + ' points!');
    alert('You currently have ' + userPoints + ' points!');
    return;
  } else {
    alert('Try again with yes or no!');
    console.log(person + ' answered in the wrong format!');
    console.log(person + ' still has ' + userPoints + ' points!');
  }
}
three();

function four (){
  let four = prompt('Do I have a dog named Riku?').toLowerCase();
  console.log(person + ' answered ' + four + ' to the first question!');

  if (four === 'yes'){
    console.log('Yes was the right answer!');
    userPoints += 1;
    alert ('Correct! He\'s a good boy!');
    console.log(person + ' now has ' + userPoints + ' points!');
    return;
  }

  if (four === 'no'){
    console.log('Yes was the right answer!');
    userPoints += 0;
    alert('Sorry, that\'s incorrect! No points!');
    console.log(person + ' now has ' + userPoints + ' points!');
    alert('You currently have ' + userPoints + ' points!');
    return;
  }

  else {
    alert('Try again with yes or no!');
    console.log(person + ' answered in the wrong format!');
    console.log(person + ' still has ' + userPoints + ' points!');
  }
}
four();

function five(){
  let five = prompt('Do I have a dog named Riku?').toLowerCase();
  console.log(person + ' answered ' + five + ' to the first question!');

  if (five === 'yes'){
    console.log('Yes was the right answer!');
    userPoints += 1;
    alert ('Correct! He\'s a good boy!');
    console.log(person + ' now has ' + userPoints + ' points!');
    return;
  } if (five === 'no'){
    console.log('Yes was the right answer!');
    userPoints += 0;
    alert('Sorry, that\'s incorrect! No points!');
    console.log(person + ' now has ' + userPoints + ' points!');
    alert('You currently have ' + userPoints + ' points!');
    return;
  } else {
    alert('Try again with yes or no!');
    console.log(person + ' answered in the wrong format!');
    console.log(person + ' still has ' + userPoints + ' points!');
  }
}
five();

function questionSix(){
  var randoNum = Math.floor(Math.random() * 10) + 1; //https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
  var opportunities = 4;
  var robotVoice = 'Guess an integer from 1 to 10!';
  /*beggining of while loop checks the condition to see if there are any turns left. */
  while (opportunities > 0) {
  /*Lets the user know to guess an integer and how many chances are left.*/
    var userChoice = prompt(robotVoice + ' You have ' + opportunities + ' tries to go.');
    /*Lets the out of the program if they select cancel.*/
    if (!userChoice){
      break;
    }
    //     /**The Number() function converts the object
    //    argument to a number that represents the object's value. */
    userChoice = Number(userChoice);
    console.log('userChoice is ' + userChoice);
    console.log('Random generator number is ' + randoNum);
    //     /**check condition of input to random number selected */
    if (userChoice === randoNum) {
      alert('thats right you guessed the random number way to go!');
      /**I need help with this part I know I need it I just dont know why. */
      opportunities = 0;
      break;
    } else {
    /*Notfies user that they were wrong and take the input decides if
     * it was higher or lower than the random number in the if statements. */
      robotVoice = 'You were close, but no, try again.';
      if (userChoice < randoNum){
        robotVoice += ' Too Low!';
      }
      //do an if here to handle for too high!!!
      robotVoice = 'You were close, but no, try again.';
      if (userChoice > randoNum){
        robotVoice += ' Too High!';
      }
      /*This decrements the opportunities each time the user enters a try. */
      opportunities = opportunities - 1;
      console.log('guessCount is ' + opportunities);
    }
  }
  /*This line of code sits outside the loop so that if the user cancels or fails
 * to guess correct, then they are told what the answer is. */
  alert('The Random number Generator chose ' + randoNum + ' as its number .');
}
questionSix();

function questionSeven(){
  let videogames = ['ANIMAL CROSSING', 'FINAL FANTASY', 'SKYRIM'];
  console.log(videogames.length);

  let attempts = 0;

  while(attempts !== 7){
    let userAnswer = prompt('What is one of my favorite video games?');
    let userAnswerTrimmedToUpperCase = userAnswer.toUpperCase().trim();
    console.log('userAnswerTrimmedToUpperCase', userAnswerTrimmedToUpperCase);

    if(videogames.indexOf(userAnswerTrimmedToUpperCase) >= 0){
      alert('Yes! ' + userAnswer + ' is one of my favorites.');
        userPoints = userPoints + 1;
        break;
    } else {
      alert('You are mistaken.');
      attempts += 1;
    }
  } alert ('My favorite games are ' + videogames);
}
questionSeven();

alert('You got ' + userPoints + ' points out of 7');