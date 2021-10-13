// 1. Create a function called checkNumber() that takes no parameter.
// 2. In the function, loop through numbers 0 to 100.
// 3. Add an if/else block
// 		• If the number is even, console.log "the number <number> is even"
// 		• Else, console.log "the number <number> is odd"
// 4. Call the function

function checkNumber() {
	for (let i = 0; i <= 100; i++) {
		if (i%2 === 0) {
			console.log("The number " + i + " is even");
		} else {
			console.log("The number " + i + " is odd");
		};
	};
};

checkNumber();