"use strict";
// const x = +prompt("Enter 1st Number");
// const y = parseInt(prompt("Enter 2nd Number"));
// const z = Number(prompt("Enter 2nd Number"));

// const result = x + y + z;

// document.write("Sum of " + x + " & " + y + " is " + result);

// ------------------------------------------------------------
// {
//     // var x = prompt("Where does the Pope live?");
//     // if (x === "Vatican") {
//     //   alert("Correct!");
//     // }
//     // var score = 0;
// }
// ------------------------------------------------------------

/* var x = prompt("Where does the Pope live?");
var correctAnswer = "Vatican";
if (x === correctAnswer) {
  //   score++; // This will throw error
  userIQ = "genius";
  console.log(userIQ);
  alert("Correct!");
} */

/* var fullName = prompt("Full Name?");
var firstName = "Adnan";
var lastName = "Irfan";
if (fullName === firstName + " " + lastName) {
  alert("Correct");
} */

/* var num = 20;
if (num == "20") {
  console.log("Correct");
} */

/* var x = prompt("Where does the Pope live?");
var correctAnswer = "Vatican";

if (x === correctAnswer) {
  alert("Correct!");
} else if (x === "Rome") {
  alert("Incorrect but close");
} else {
  alert("Incorrect");
} */

// (10 < 20 || 20 > 10) && 300 > 100
// ((10 < 20 || 20 > 10) && name == 'qwerty' ) || 300 > 100

/* if ((x === y || a === b) && c === d) {
  g = h;
} else {
  e = f;
} */

/* if (c === d) {
  if (x === y) {
    g = h;
  } else if (a === b) {
    g = h;
  } else {
    e = f;
  }
} else {
  e = f;
} */

var weight = prompt("Enter Weight"); // 350
var time = prompt("Enter Time"); // 5.5

if (weight > 300 && time < 6) {
  alert("Come to our tryout!");
} else {
  alert("Come to our cookout!");
}
