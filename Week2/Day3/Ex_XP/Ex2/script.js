let people = ["Greg", "Mary", "Devon", "James"]

// 1. Write code to remove “Greg” from the people array.
people.shift();


// 2. Write code to replace “James” to “Jason”.
people.splice(2, 1, "Jason");


// 3. Write code to add your name to the end of the people array.
people.push("Olga");


// 4. Using a loop, iterate through the people array and console.log each person.
people.forEach(item => {
	console.log(item);
});


// 5. Using a loop, iterate through the people array and after you console.log “Jason” exit the loop.
for (let i = 0; i < people.length; i++) {
	if (people[i-1] === "Jason") {
		break;
	};
	console.log(people[i]);
};


// 6. Write code to make a copy of the people array using slice. The copy should NOT include “Mary” or your name.
let peopleCopy = people.slice(1, 3);


// 7. Write code that console.logs Mary’s index. take a look at indexOf on google.
console.log(people.indexOf("Mary"));


// 8. Write code that gives the indexOf “Foo” (this should return -1). Why does it return -1
console.log(people.indexOf("Foo"));
//indexOf returns -1 if the item is not found


// 9. Create a variable called last which value is the last element of the array.
// 		Hint: What is the relationship between the index of the last element in the array and the length of the array?
console.log(people[people.length - 1]);






