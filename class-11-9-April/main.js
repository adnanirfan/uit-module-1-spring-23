"use strict";

// Data Types

// string 'asfsadfs314242134'
// number
// boolean: true/false
// array: [1,2,3,4]

// Array
// var data = ["a", "b", "c", "d", 1, 2, 3, 4, false, true, false];

/**
 * set value at specific index
 * pop
 * push
 * shift
 * unshift
 */

// // Loop 0-9
// for (let i = 0; i <= 10; i++) {
//   console.log(data[i]);
// }

// i = 0 | 0<10 | console.log('a') | i++ i=1
// i = 1 | 1<10 | console.log('b') | i++ i=2
// i = 2 | 2<10 | console.log('c') | i++ i=3
// i = 3 | 3<10 | console.log('d') | i++ i=4
// i = 4 | 4<10 | console.log(1) | i++ i=5
// i = 5 | 5<10 | console.log(2) | i++ i=6
// i = 6 | 6<10 | console.log(3) | i++ i=7
// i = 7 | 7<10 | console.log(4) | i++ i=8
// i = 8 | 8<10 | console.log(false) | i++ i=9
// i = 9 | 9<10 | console.log(true) | i++ i=10
// i = 10 | 10<=10 | console.log(false) | i++ i=11
// i = 11 | 11<=10 | loop ends here
// -----------------------------

// var cities = ["Atlanta", "Baltimore", "Chicago", "Denver", "Los Angeles", "Seattle"];

// console.log(cities[3]);

// cities[3] = 'Karachi';

// console.log(cities[3]);

// -----------------------------

var pets = []; // empty array

pets[0] = "dog";
pets[1] = "cat";
pets[2] = "bird";

console.log(pets);

// // pets[3] = 'lion';
// // pets[6] = 'zebra';

// // console.log(pets)

// pets.push("lion");
// pets.push("zebra", "fish", "ferret");
// console.log(pets);

// console.log("POP", pets.pop());
// console.log(pets);

pets.shift();
console.log(pets);

pets.unshift("fish", "ferret");
console.log(pets);

