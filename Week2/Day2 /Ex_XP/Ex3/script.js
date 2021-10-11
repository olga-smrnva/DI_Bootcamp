// 1. Prompt the user for a number and save it to a variable.
// 2. Check whether the variable is even or odd.
// 		• If it is even, display: “x is an even number”. Where x is the actual number the user chose.
// 		• If it is odd, display: “x is an odd number”. Where x is the actual number the user chose.

let num = Number(prompt("Please enter a number"));

if (num % 2 === 0) {
	console.log(num + " is an even number");
} else {
	console.log(num + " is an odd number");
};