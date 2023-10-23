// 3 coding structures that change the order of operations in an app

// 1. Conditionals
const isTiredOfMondays = false;

if (isTiredOfMondays) {
  console.log('Take a nap');
} else {
  console.log('Get to work!')
}

// 2. Functions
const greet = function(name) {
  console.log(`Hi, ${name}!`)
}

greet('Tony');
greet('Chris');
greet('Ayan');

// 3. Loops
// for (let i = 1; i <= 100; i++) {
//   console.log(i);
// }