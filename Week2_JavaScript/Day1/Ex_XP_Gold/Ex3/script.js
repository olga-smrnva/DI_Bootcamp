//Prompt the user for the first number.
// Store the first number in a variable called num1.
// Prompt the user for the second number.
// Store the second number in a variable called num2.
// Create an Alert where the value is the SUM of num1 and num2.
// BONUS: Make a program that can subtract, multiply, and also divide!

let num1 = prompt('To start counting enter the first number');
let num2 = prompt('Enter the second number');

let sum = Number(num1) + Number(num2);
alert('The sum is ' + sum);

let substraction = Number(num1) - Number(num2);
alert('The substraction is ' + substraction);

let mult = Number(num1) * Number(num2);
alert('The multiplication is ' + mult);

let division = Number(num1) / Number(num2);
alert('The division is ' +  division);
