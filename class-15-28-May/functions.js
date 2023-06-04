function tellTime() {
  var now = new Date();
  var theHr = now.getHours();
  var theMin = now.getMinutes();
  console.log("time: " + theHr + ":" + theMin);
}

// tellTime();

function greetUser(name) {
  return "Hello, " + name;
}

var str = greetUser("World");

// console.log(str);

// sum
// sub
// mul
// div

var orderTotal;
// console.log(orderTotal);

function calcTot(merchTot) {
  if (merchTot >= 100) {
    orderTotal = merchTot;
  } else if (merchTot < 50.01) {
    orderTotal = merchTot + 5;
  } else {
    orderTotal = merchTot + 5 + 0.03 * (merchTot - 50);
  }

  return orderTotal;
}

// calcTot(10000);

// console.log(orderTotal);

/* var dayOfWk = "Sun";

switch (dayOfWk) {
  case "Sat":
    console.log("1");
    break;
  case "Sun":
    console.log("2");
    break;
  case "Fri":
    console.log("3!");
    break;
  default:
    console.log("4!");
} */

/* for (var i = 0; i <= 3; ) {
  console.log(i);
  i++;
}

var j = 0;
while (j <= 3) {
  console.log(j);
  j++;
}

var k = 0;
do {
  console.log(k);
  k++;
} while (k <= 3); */
