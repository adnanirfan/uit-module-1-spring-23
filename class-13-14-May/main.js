// if (condition){statements}

// for (condition) {statements}
// var data = [];

// var num = parseInt(prompt('Enter number'));

// for (var i = 1; i <= 10; i++) {
// //   console.log(2 + " x " + i + " = " + 2 * i);
//   console.log(`${num} x ${i} = ${num * i}`);
// }

// var matchFound = false;
// var city = prompt("Enter City name");
// var cleanestCities = ["Karachi", "Lahore", "Islamabad", "Larakana"];

// for (var i = 0; i < cleanestCities.length; i++) {
//   console.log("iteration ", i);
//   if (city.toLowerCase() === cleanestCities[i].toLowerCase()) {
//     matchFound = true;
//     alert("City Found");
//     break;
//   }
// }
// if (matchFound === false) {
//   alert("It's not on the list");
// }

/**
 * Problem: Write a JavaScript program that uses a for loop to calculate the sum of the first 10 natural numbers and display the result on the console.
    e.g,
    1 2 3 4 5
    Result: 15
 */
// let result = 0;
// for (let i = 1; i <= 10; i++) {
//   result = result + i;
// }
// console.log(result);

// var firstNames = ["BlueRay ", "Upchuck ", "Lojack ", "Gizmo ", "Do-Rag "];
// var lastNames = ["Zzz", "Burp", "Dogbone", "Droop"];
// var fullNames = [];
// for (var i = 0; i < firstNames.length; i++) {
//   for (var j = 0; j < lastNames.length; j++) {
//     // console.log(firstNames[i] + " " + lastNames[j]);
//     fullNames.push(firstNames[i] + " " + lastNames[j]);
//   }
// }

// console.log(fullNames);




var text =
  "The New Yorker magazine doesn't allow the phrase 'World War II. ' They say it should be 'World War II.' So let's search the following sentence for the banned characters and replace them with the phrase that the New Yorker prefers.";
console.log(text);
// for (var i = 0; i < text.length; i++) {
//   if (text.slice(i, i + 12) === "World War II") {
//     text = text.slice(0, i) + "the Second World War" + text.slice(i + 12);
//   }
// }
const index = text.indexOf('World War II')
console.log(index);

// nested loops
// slice
// length
// indexOf

// regex
text = text.replace(/World War II/g, "the Second World War");
console.log(text)

// fadsfasdf@asdfdsaf.dsf