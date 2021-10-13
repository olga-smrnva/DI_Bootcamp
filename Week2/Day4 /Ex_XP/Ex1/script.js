// Part I

// 1. Create a function called infoAboutMe() that takes no parameter.
// 2. The function should console.log a sentence about you (ie. your name, age, hobbies ect…).
// 3. Call the function.

function infoAboutMe() {
	console.log("Hello! My name is Olga! Great to see you!");
};

infoAboutMe();


// Part II

// 1. Create a function called infoAboutPerson(personName, personAge, personFavoriteColor) that takes 3 parameters.
// 2. The function should console.log a sentence about the person (ie. “You name is …, you are .. years old, your favorite color is …”)
// 3. Call the function twice with the following arguments:
// 		• infoAboutPerson("David", 45, "blue")
// 		• infoAboutPerson("Josh", 12, "yellow")

function infoAboutPerson(personName, personAge, personFavoriteColor) {
	console.log("Your name is " + personName + ", you are " + personAge + " years old, your favourite colour is " + personFavoriteColor);
};

infoAboutPerson("David", 45, "blue");
infoAboutPerson("Josh", 12, "yellow");

// Part III

// 1. Add a parameter personHobbies to the function infoAboutPerson(personName, personAge, personFavoriteColor, personHobbies).
// 2. The function should
// 		• console.log a sentence about the person (ie. “You name is …, you are .. years old, your favorite color is …”)
// 		• console.log the person’s hobbies one by one (ie. loop through the array of hobbies).
// 3. Call the function twice with the following arguments:
// 		• infoAboutPerson("David", 45, "blue", ["tennis", "painting"])
// 		• infoAboutPerson("Josh", 12, "yellow", ["videoGame", "hanging out with friends", "playing cards"])


function infoAboutPerson2(personName, personAge, personFavoriteColor, personHobbies) {
		console.log("Your name is " + personName + ", you are " + personAge + " years old, your favourite colour is " + personFavoriteColor);

		for (let i = 0; i < personHobbies.length; i++) {
			console.log(personHobbies[i]);
		};
};

infoAboutPerson2("David", 45, "blue", ["tennis", "painting"]);
infoAboutPerson2("Josh", 12, "yellow", ["videoGame", "hanging out with friends", "playing cards"]);






