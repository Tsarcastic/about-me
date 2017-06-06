'use strict';
prompt("Hi! What's your name?"); //don't care for now!
prompt("Enough about you. Let's talk about me. How many things would you like to know about me? Please enter a number between 1 and 5 and we'll play a fun guessing game"); //all numbers are fives if you look at them right
alert("Five! I'm flattered! Well let's get started.");

var q1 = prompt("Some people think I like cats. But am I really a dog person?");
console.log("They replied " + q1 + " to the first question.");
if (q1.toLowerCase() === "yes") {
  alert("I am. Doggos and puppers are the best.");
} else if (q1.toLowerCase() === "y") {
  alert("I am. Doggos and puppers are the best.");
} else if (q1.toLowerCase() === "no") {
  alert("Unfortunately I'm allergic to cats and grass. I would have been an awful beatnik.");
} else if (q1.toLowerCase() === "n") {
  alert("Unfortunately I'm allergic to cats and grass. I would have been an awful beatnik.");
} else {
    alert("Please enter future answers as yes/no or y/n");
}

var q2 = prompt("Is my favorite food pizza?");
console.log("They replied " + q2 + " to the first question.");;
if (q2.toLowerCase() === "yes") {
  alert("Yeah, I'm a perpetual six year old.");
} else if (q2.toLowerCase() === "y") {
  alert("Yeah, I'm a perpetual six year old.");
} else if (q2.toLowerCase() === "no") {
  alert("Wrong. Pizza is objectively the best food.");
} else if (q2.toLowerCase() === "n") {
  alert("Wrong. Pizza is objectively the best food.");
} else {
    alert("Please enter future answers as yes/no or y/n");
}

var q3 = prompt("Do you think I voted for Lyndon Larouche in the presidential election last year?");
console.log("They replied " + q3 + " to the first question.");
if (q3.toLowerCase() === "yes") {
  alert("He didn't even run last year!");
} else if (q3.toLowerCase() === "y") {
  alert("He didn't even run last year!");
} else if (q3.toLowerCase() === "no") {
  alert("That's correct! Because he is a lunatic. And he wasn't running.");
} else if (q3.toLowerCase() === "n") {
  alert("That's correct! Because he is a lunatic. And he wasn't running.");
} else {
  alert("Please enter future answers as yes/no or y/n");
}

var q4 = prompt("ROCK PAPER SCISSORS SHOOT. \n \n \n \n \n \n \n \n \nI picked rock. Did I win?");
console.log("They replied " + q4 + " to the first question.");
if (q4.toLowerCase() === "yes") {
  alert("Good old rock. Nothing beats rock.");
} else if (q4.toLowerCase() === "y") {
  alert("Good old rock. Nothing beats rock.");
} else if (q4.toLowerCase() === "no") {
  alert("Uh-huh. Right.");
} else if (q4.toLowerCase() === "n") {
  alert("Uh-huh. Right.");
} else {
  alert("Please enter future answers as yes/no or y/n");
}

var q5 = prompt("Do you think asking questions about myself to an imaginary stranger is narcissistic?");
console.log("They replied " + q5 + " to the first question.");
if (q5.toLowerCase() === "yes") {
  alert("Well you're rude.");
} else if (q5.toLowerCase() === "y") {
  alert("Well you're rude.");
} else if (q5.toLowerCase() === "no") {
  alert("I think you are a gentleman(or gentlewoman) and a scholar.");
} else if (q5.toLowerCase() === "n") {
  alert("I think you are a gentleman(or gentlewoman) and a scholar.");
} else {
  alert("Come on, you know the drill by now.");
}
