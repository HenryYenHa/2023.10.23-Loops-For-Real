/* 3 Coding structures that change the order of operations in an app

Expresssion



*/

// //1. Conditionals
// const isTiredofMondays = true;
// if (isTiredofMondays) {
//   console.log("Sleep");
// } else {
//   console.log("Get to work");
// }

//2.Functions
// //NEW WAY TO TYPE IN A FUNCTION
// const greet = function (name) {
//   console.log(`Greetings, ${name}!`); //NOTE USE BACKTICKS ON THESE TO USE ${} EXPRESSIONS
// };

//Alternate function syntax:
const greet = (name) => console.log(`Yo ${name}!`);

greet("Jack");

function isDivBy(i, j) {
  // if (Math.floor(i / j) === i / j) {
  if (i % j === 0) {
    return true;
  } else {
    return false;
  }
}
for (let i = 1; i <= 100; i++) {
  //Attempted Switch variant
  switch (true) {
    case i % 15 === 0:
      console.log("Fizzbuzz");
      break;
    case i % 3 === 0:
      console.log("Fizz");
      break;
    case i % 5 === 0:
      console.log("Buzz");
      break;
    default:
      console.log(i + "!");
  }

  // //If else variant
  // if (isDivBy(i, 5) && isDivBy(i, 3)) {
  //   console.log("Fizzbuzz");
  // } else if (isDivBy(i, 3)) {
  //   console.log("Fizz");
  // } else if (isDivBy(i, 5)) {
  //   console.log("Buzz");
  // } else {
  //   console.log(i);
  // }
}

// //Fizz Buzz one liner
// for(let i=0;i<100;)console.log((++i%3?'':'fizz')+(i%5?'':'buzz')||i)

console.log("What" + !!0);
