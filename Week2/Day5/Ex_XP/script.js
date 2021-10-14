// Explanation of the game : the point of the game is to guess the number that the computer has in “mind”.

// First Part

// Let’s create the function:

// 1. In the JS file, create a function called playTheGame() that takes no parameter.
//		• In the function, start by asking the user if they would like to play the game 
// 		(Hint: use the built-in confirm() function).

// 		• If the answer is false, alert “No problem, Goodbye”.

// 2. If his answer is true, follow these steps:
// 		• Ask the user to enter a number between 0 and 10 (Hint: use the built-in prompt() function). 
// 		You then have to check the validity of the user’s number :

// 		• If the user didn’t enter a number (ie. if he entered another data type) 
// 			alert “Sorry Not a number, Goodbye”.
// 		•If the user didn’t enter a number between 0 and 10 
// 			alert “Sorry it’s not a good number, Goodbye”.
// 		•Else (ie. he entered a number between 0 and 10), 
// 		create a variable named computerNumber where the value is a random number between 0 and 10 
// 		(Hint: Use the built-in Math.random() function). Make sure that the number is rounded.


function playTheGame() {
	let isPlay = confirm("Hello! Do you want to play the game?");

	if (!isPlay) {
	alert("No problem, Goodbye!");
	} else {
		let userNumber = Number(prompt("Please, enter a number between 0 and 10"));
		if (!userNumber && userNumber !== 0) {
			alert("Sorry Not a number, goodbye!");
		} else if (userNumber < 0 || userNumber > 10) {
			alert("Sorry it’s not a good number, goodbye!");
		} else {
			let computerNumber = Math.trunc(Math.random()*11);
			console.log(computerNumber); 
			test(userNumber, computerNumber);
		};
	};
};

// Second Part
// 1. Outside of the playTheGame() function, create a new function 
// 	named test(userNumber,computerNumber) that takes 2 parameters : 
// 	userNumber and computerNumber

// 2. The point of this function is to check if the userNumber is the same as the computerNumber:
// 		• If userNumber is equal to computerNumber, alert “WINNER” and stop the game.
// 		• If userNumber is bigger than computerNumber, alert “Your number is bigger then the computer’s, guess again” 
// 		(Hint: use the built-in prompt() function to ask the user for a new number).
// 		• If userNumber is lower than computerNumber, alert “Your number is smaller then the computer’s, guess again” 
// 		(Hint: use the built-in prompt() function to ask the user for a new number).
// 		• If the user guessed more than 3 times, alert “out of chances” and exit the function.

function test(userNumber, computerNumber){
	for (let i = 0; i < 3; i++) {
		if (userNumber === computerNumber) {
			alert("WINNER!");
		} else if (i === 2) {
			alert("Out of chances");
		} else if (userNumber > computerNumber) {
			alert("Your number is bigger then the computer’s, guess again");
			userNumber = Number(prompt("Please, enter a number between 0 and 10"));
		} else {
			alert("Your number is smaller then the computer’s, guess again");
			userNumber = Number(prompt("Please, enter a number between 0 and 10"));
		};
	};
};

// In the First Part, instead of stopping the process if the user didn’t enter a valid number. 
// Continue asking for a number until the user enters a valid number.

function playTheGame2() {
	let isPlay = confirm("Hello! Do you want to play the game?");
	let userNumber = 0;
	let computerNumber = 0;

	if (!isPlay) {
	alert("No problem, Goodbye!");
	} else {
		do {
		userNumber = Number(prompt("Please, enter a number between 0 and 10"));
			if (!userNumber && userNumber !== 0) {
				alert("Sorry Not a number, try again!");
			} else if (userNumber < 0 || userNumber > 10) {
				alert("Sorry it’s not a good number, try again!");
			};
		} while (!(userNumber >= 0) || !(userNumber <= 10));
	
		computerNumber = Math.trunc(Math.random()*11);
		// console.log(computerNumber); 
		// test(userNumber, computerNumber);
	};
};

playTheGame2();