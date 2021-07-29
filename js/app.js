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

let numQ = 3;
let chances = 4;

while (chances > 0) {
  chances = chances -1;

  let userResp = prompt ('Guess a number between 1 and 10!');
}

if (userResp != numQ)

// create an array

// let choices = ['CHOICEA', 'CHOICEB', 'CHOICEC'];
// console.log(choices.length);

// let attempts = 0;
// let correctAnswer = 2;

// while (attempts!== 7){
//   let userAns = prompt('Which choice is correct?');
//   let userAnsTrim = userAns.toUpperCase().trim();
//   console.log('userAnsTrim', userAnsTrim);
// }

// if (choices.indexOf(userAnsTrim) >= 0){
//   correctAnswer = correctAnswer += 1;

// }











// .toLowercase()

// 5 yes or no questions, with lowercase validation
// alert user with response letting them know if they got it right
// console.log messages to notify if they are correct, then comment out and add
// alert instead

// add a personalized welcome message
// ask them their name with a prompt
// display their name back to them with a custom greeting
// display their name back to them in final message to the user

// js file must contain 'use strict'
// ACP
// experiment with css

// part two
// modify readme file as you go
// create a top ten at bottom of html page as an ordered list
// add work and education history as an unordered list

// add 6th question - guess a number
// alert if too high or too low
// give four chances to get it right
// after four chances, tell user correct answer, use a loop

// add a 7th question - multiple choice
// 6 chances to get it right
// will end when they get it right or when they run out of attempts
// display all possible answers to user

// keep track of total correct answers
// tell user how many they got correct out of 7

// console.log questions being asked
// don't use functions

// use array for first five questions
// make answer to number question a random number