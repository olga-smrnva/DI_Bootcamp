// Write a JavaScript program that displays the colors in the following order:
// “1st choice is Blue .” “2nd choice is Green.” “3rd choice is Red.” ect…
// 		Hint : Use the array methods taught in class.


let color = ["Blue", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow"];
let ordinal = ["th","st","nd","rd"];

color.forEach(function(color, index) {
	console.log(`${index + 1}${index < 3 ? ordinal[index + 1] : ordinal[0]} choise is ${color}`);
});
