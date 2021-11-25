// 1. Check if this array includes the color “Violet”.
// 2. Write a JavaScript program that displays the colors in the following order:
// 		“1# choice is Blue.” “2# choice is Green.” “3# choice is Red.” ect…
//         Hint : Use the array methods taught in class.


let colors = ["Blue", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow"];

let checkInclude = colors.includes("Violet");

colors.forEach(function(color, index) {
	console.log(`${index + 1}# choise is ${color}`);
});

