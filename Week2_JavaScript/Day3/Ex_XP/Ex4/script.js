// Given the object where the key is the students name and the value is the country they are from.

// 1. Prompt the student for their name :
// 		• If the name is in the object, console.log the name of the student and the country they come from.
// 		  example: "Hi! I'm [name], and I'm from [country]."
// 		• Hint: Look up the statement if ... in
// 		• If the name is not in the object, console.log: "Hi! I'm a guest."

let guestList = {
  randy: "Germany",
  karla: "France",
  wendy: "Japan",
  norman: "England",
  sam: "Argentina"
};

let studentName = prompt("What is your name?");

if (studentName in guestList) {
	console.log("Hi! !'m " + studentName + ", and I'm from " + guestList[studentName]);
} else {
		console.log("Hi! I'm a guest");
};
