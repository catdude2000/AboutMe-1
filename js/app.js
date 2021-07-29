'use strict';
console.log('app.js file is connected');

let person = prompt('Hello! What is your name?').toLowerCase();
console.log('Person name is: ' + person);

let game = prompt('Welcome, ' + person + '! Are you ready to play the game?').toLowerCase();
console.log(person + ' said ' + game + ' to the game question!');

if (game === 'yes'){
  alert('Good!');
}

if (game === 'no'){
  alert('Too bad!');
}

let userPoints = 0;

alert('You currently have zero points! Here we go!');

let one = prompt('Do I have a dog named Riku?').toLowerCase();
console.log(person + ' answered ' + one + ' to the first question!');

if (one === 'yes'){
  // console.log('Yes was the right answer!');
  userPoints += 1;
  alert ('Correct! He\'s a good boy!');
  console.log(person + ' now has ' + userPoints + ' points!');
}

if (one === 'no'){
  // console.log('Yes was the right answer!');
  userPoints += 0;
  alert('Sorry, that\'s incorrect! No points!');
  console.log(person + ' now has ' + userPoints + ' points!');
  alert('You currently have ' + userPoints + ' points!');
}

else {
  alert('Try again with yes or no!');
  console.log(person + ' answered in the wrong format!');
  console.log(person + ' still has ' + userPoints + ' points!');
}



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
