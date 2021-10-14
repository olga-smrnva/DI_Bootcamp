var database = [
	{
		username: "olga",
		password: "blablabla",
	},
	{
		username: "mary",
		password: "ololo"
	},
	{
		username: "sam",
		password: "123"
	}
];

var newsFeed = [
	{
		username: "Jack",
		timeline: "So exited to learn!",
	},
	{
		username: "Ann",
		timeline: "JS rulezzzz!",
	}
];

function isUserValid(user, pass) {
	for (let i = 0; i < database.length; i++) {
		if (database[i].username === user && 
		database[i].password === pass) {
			return true;
		};
	};
	return false;
};

function signIn(user, pass) {
	if (isUserValid(user, pass)) {
		console.log(newsFeed);
	} else {
		alert("Sorry, wrong username and password!");
	};
};

var userNamePrompt = prompt("What's your usernsme?");
var passwordPrompt = prompt("What's your password?");


signIn(userNamePrompt, passwordPrompt);