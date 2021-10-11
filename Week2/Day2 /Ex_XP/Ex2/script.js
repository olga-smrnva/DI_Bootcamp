// 1. Create a variable called newDog where it’s value is “Chihuahua”.
// 2. Check and display how many letters are in newDog.
// 3. Display the newDog variable in uppercase and then in lowercase (no need to create new variables, just console.log twice).
// 4. Check if the variable newDog is equal to “Chihuahua”
// 		• if it does, display ‘I love Chihuahuas, it’s my favorite dog breed’
// 		• else, console.log ‘I dont care, I prefer cats’

let newDog = "Chihuahua";

console.log(newDog.length);
//output: 9

console.log(newDog.toUpperCase());
//output: CHIHUAHUA

console.log(newDog.toLowerCase());
//output: chihuahua

if (newDog === "Chihuahua") {
	console.log("I love Chihuahuas, it’s my favorite dog breed");
} else {
	console.log("I dont care, I prefer cats");
};
//output: I love Chihuahuas, it’s my favorite dog breed