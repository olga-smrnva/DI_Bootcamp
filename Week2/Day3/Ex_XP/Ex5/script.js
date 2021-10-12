// 1. Create an object called family with a few key value pairs.
// 2. Console.log the keys. (using a for loop).
// 3. Console.log the values. (using a for loop).

let family = {
	famName: "Smith",
	momName: "Ann",
	dadName: "Jack",
	numOfKids: 5
};

for (let key in family) {
	console.log(key);
};

for (let key in family) {
	console.log(family[key]);
};

//or everything at once:

for (let key in family) {
	console.log(key + ": " + family[key]);
};