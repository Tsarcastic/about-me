'use strict';
var userName = prompt('Hi! What\'s your name?'); //don't care for now
prompt('Enough about you. Let\'s talk about me. How many things would you like to know about me? \n Please enter a number between 1 and 5 and we\'ll play a fun guessing game'); //all numbers are fives if you look at them right
alert('Five! I\'m flattered! Well let\'s get started.');

var correctAnswers = 0;

var q1 = prompt('Some people think I like cats. But am I really a dog person?');
console.log('They replied ' + q1 + ' to the question about dogs & cats.');
if (q1.toLowerCase() === 'yes' || q1.toLowerCase() === 'y') {
    alert('I am. Doggos and puppers are the best.');
  correctAnswers += 1;
} else if (q1.toLowerCase() === 'no' || q1.toLowerCase() === 'n') {
    alert('Unfortunately I\'m allergic to cats and grass. I would have been an awful beatnik.');
}  else {
    alert('Please enter future answers as yes/no or y/n');
}

var q2 = prompt('Is my favorite food pizza?');
console.log('They replied ' + q2 + ' to the question about food.');;
if (q2.toLowerCase() === 'yes' || q2.toLowerCase() === 'y') {
    alert('Yeah, I\'m a perpetual six year old.');
  correctAnswers += 1;
} else if (q2.toLowerCase() === 'no' || q2.toLowerCase() === 'n') {
    alert('Wrong. Pizza is objectively the best food.');
} else {
    alert('Please enter future answers as yes/no or y/n');
}

var q3 = prompt('Do you think I voted for Lyndon Larouche in the presidential election last year?');
console.log('They replied ' + q3 + ' to the question about voting.');
if (q3.toLowerCase() === 'yes' || q3.toLowerCase() == 'y') {
    alert('He didn\'t even run last year!')
} else if (q3.toLowerCase() === 'no' || q3.toLowerCase() === 'n') {
    alert('That\'s correct! Because he is a lunatic. And he wasn\'t running.');
    correctAnswers += 1
} else {
    alert('Please enter future answers as yes/no or y/n');
}

var q4 = prompt('ROCK PAPER SCISSORS SHOOT. \n \n \n \n \n \n \n \n \nI picked rock. Did I win?');
console.log('They replied ' + q4 + ' to the question about RPS.');
if (q4.toLowerCase() === 'yes' || q4.toLowerCase() === 'y') {
    alert('Good old rock. Nothing beats rock.');
  correctAnswers += 1; //They're right either way.
} else if (q4.toLowerCase() === 'no' || q4.toLowerCase() === 'n') {
    alert('Uh-huh. Right.');
  correctAnswers += 1; //They're right either way.
} else {
    alert('Please enter future answers as yes/no or y/n');
}

var q5 = prompt('Is my favorite David Bowie album Ziggy Stardust and the Spiders from Mars?');
console.log('They replied ' + q5 + ' to the first question.');
if (q5.toLowerCase() === 'yes' || q5.toLowerCase() === 'y') {
    alert('No, it\'s Station to Station.');
} else if (q5.toLowerCase() === 'no' || q5.toLowerCase() === 'n') {
    alert('Correct. While it\'s one of his best albums Station to Station is my favorite.');
} else {
    alert('Come on, you know the drill by now.');
}

var i = 0;

for (i = 0; i < 4; i++) { //This is the sequence where they have 4 tries to guess the number and receive hints.
  var bestNumber = Math.floor(Math.random() * 10) + 1;
  var q6 = parseInt(prompt('What is the best number between 1 and 10? You have ' + (4 - i) + ' guesses remaining.'));
  console.log('On Guess #' + (i + 1) + ' for the sixth question they answered ' + q6 + '.');
  if (q6 === bestNumber) {
    alert('That\'s right! ' + bestNumber + ' is the best number.');
    var i = 4;
    correctAnswers +=1
  }   else if (q6 > bestNumber) {
        alert('No, ' + q6 + ' is too high.')
  }   else if (q6 < bestNumber) {
        alert('No, ' + q6 + ' is too low.')
  }   else {
        alert('Please enter your answer in the form of a number.')
  }
}

var states = ["virginia", "florida", "washington"];

for (i = 0; i < 6; i++) {
  var q7 = prompt('I\'ve lived in two other states than Washington. What is one of those?\n You have ' + (6 - i) + ' guesses remaining.');
  console.log('On Guess #' + (i + 1) + ' for the seventh question they said I lived in ' + q7 + '.');
  if (q7.toLowerCase() === states[0] || q7.toLowerCase() === states[1]) {
    var i = 6;
    correctAnswers += 1;
    alert('Correct! I\'ve lived in Virginia, Florida and Washington.')
  } else if (i === 6) {
      alert('I\'m sorry, but you\'ve run out of guesses');
  } else {
      alert('No, I\'ve never lived in ' + q7 + '.');
  }
}

alert('Sorry, ' + userName + ' but that\'s all the questions. You answered ' + correctAnswers + ' correctly out of seven possible.')
