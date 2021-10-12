// 1. A group of friends have decided to start a secret society. The society’s name will be the first letter 
// 	of each of their names sorted in alphabetical order.
// 		Hint: a string is an array of letters
// 2. Console.log the name of their secret society.

let names = ["Jack", "Philip", "Sarah", "Amanda", "Bernard", "Kyle"];

let secretName = [];

names.forEach(getLetter);

function getLetter (item) {
	secretName.push(item[0]);
};

secretName = secretName.sort().join("");

console.log(secretName);
