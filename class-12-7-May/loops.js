// if (condition){statements}

// for (condition) {statements}
// var data = [];

// var num = parseInt(prompt('Enter number'));

// for (var i = 1; i <= 10; i++) {
// //   console.log(2 + " x " + i + " = " + 2 * i);
//   console.log(`${num} x ${i} = ${num * i}`);
// }

var matchFound = false;
var city = prompt("Enter City name");
var cleanestCities = ["Karachi", "Lahore", "Islamabad", "Larakana"];
for (var i = 0; i < cleanestCities.length; i++) {
  if (city.toLowerCase() === cleanestCities[i].toLowerCase()) {
    matchFound = true;
    alert("City Found");
  }
}
if (matchFound === false) {
  alert("It's not on the list");
}
