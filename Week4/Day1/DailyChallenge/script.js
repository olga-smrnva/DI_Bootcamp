// 1. Create an array using forEach that contains all the usernames from the gameInfo array, 
//      add an exclamation point (ie. “!”) to the end of every username.
// 2. Create an array using forEach that contains the usernames of all players with a score bigger than 5.
//      Tip: Use the ternary operator
// 3. Find and display the total score of the users.

const gameInfo = [
	{
	  username: "john",
	  team: "red",
	  score: 5,
	  items: ["ball", "book", "pen"]
	},
	{
	  username: "becky",
	  team: "blue",
	  score: 10,
	  items: ["tape", "backpack", "pen"]
	},
	{
	  username: "susy",
	  team: "red",
	  score: 55,
	  items: ["ball", "eraser", "pen"]
	},
	{
	  username: "tyson",
	  team: "green",
	  score: 1,
	  items: ["book", "pen"]
	},
];

let allNames = [];
let highScore = [];
let allScore = 0;

gameInfo.forEach(user => allNames.push(user.username + "!"));
// console.log(allNames);

gameInfo.forEach(user => user.score > 5 ? highScore.push(user.username) : highScore);
// console.log(highScore);

gameInfo.forEach (user => allScore += user.score);
console.log(allScore);