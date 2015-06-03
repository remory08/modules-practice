var calculator = require('./lib.js');

var sum = calculator.sum(1,2);
var multiply = calculator.multiply(3,4);
var square = calculator.square(9);
var divide = calculator.divide(36,6);
var subtract = calculator.subtract(78,3);
var remainder = calculator.remainder(55,6);


console.log(sum);
console.log(multiply);
console.log(square);
console.log(divide);
console.log(subtract);
console.log(remainder);


var arrayator = require('./arrayator.js');

var arr = arrayator.arrayo("I love dogs", "What you talkin' bout, Willis?", "That phrase is so uncouth");

console.log(arr);
