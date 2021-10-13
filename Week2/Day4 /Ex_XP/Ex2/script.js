// 1. Ask the user for their age, and save the value to a variable.
// 2. Create a function called checkDriverAge() that will notify the user if they are permitted to drive. They must be at least 18 to drive.
// 		• if the user is too young, alert “Sorry, you are too young to drive this car. Powering off”
// 		• if the user is old enough, alert “You are old enough to drive, Powering On. Enjoy the ride!”
// 		• if the user just turned 18, alert “Congratulations on your first year of driving. Enjoy the ride!”
// 3. Call the function.
// 4. Instead of using prompt to ask the user for their age, have the checkDriverAge() function accept an argument age.

let age = Number(prompt("What's your age?"));

function checkDriverAge(driverAge) {
	if (driverAge < 18) {
		alert("Sorry, you are too young to drive this car. Powering off");
	} else if (driverAge === 18) {
		alert("Congratulations on your first year of driving. Enjoy the ride!");
	} else {
		alert("You are old enough to drive, Powering On. Enjoy the ride!");
	};
};

checkDriverAge(age);