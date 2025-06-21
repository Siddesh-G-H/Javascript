const score = 400

// console.log(score);

// const bal = new Number(100)

// console.log(bal);

// console.log(bal.toString().length);

// console.log(bal.toFixed(2));  //same as round function

// const float = 24.544657

// console.log(float.toPrecision(3)); // how many digits to print 

// const hundreds = 10000000000000

// console.log(hundreds.toLocaleString('en-IN')); //default in US standards

// ********************** MATHS **********************************

//Some important functions

// console.log(Math);

// console.log(Math.PI);

// console.log(Math.abs(-212)); // same as cpp abs

// console.log(Math.round(5.344144454)); // return integer not float


// console.log(Math.ceil(5.1)); //returns 6

// console.log(Math.floor(5.9)) // returns 5

// console.log(Math.min(5, 7, 8, 9, 8, 6, 5)); // we can even pass array

// console.log(Math.max(5, 7, 8, 9, 8, 6, 5));

console.log(Math.random()); // generates numbers between 0 and 1

// to get normal floates  multiply with 10,but it can be 0.004132 so add 1 for not to get 0 to get integer use floor functions

console.log(Math.floor((Math.random()*10)+1)); // generates numbers between 1 and 10

const max = 20
const min = 15

console.log(Math.floor((Math.random() * (max - min + 1)) + min));