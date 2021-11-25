// 1. Create a function call isDivisible() that takes no parameter.
// 2. In the function, loop through numbers 0 to 500.
// 3. Console.log all the numbers divisible by 23.
// 4. At the end, console.log the sum of all numbers that are divisible by 23.


function isDivisible() {
	let a = 0;
	for (let i = 0; i <= 500; i++) {
		if (i%23 === 0) {
			console.log(i);
			a += i;
		};
	};
	console.log("The sum of all numbers between 0 and 500 that are divisible by 23 is " +a);
};

isDivisible();


//Bonus: Add a parameter divisor to the function.
function isDivisible2(divisor) {
	let a = 0;
	for (let i = 0; i <= 500; i++) {
		if (i%divisor === 0) {
			console.log(i);
			a += i;
		};
	};
	console.log("The sum of all numbers between 0 and 500 that are divisible by " + divisor + " is " +a);
};

isDivisible2(176);