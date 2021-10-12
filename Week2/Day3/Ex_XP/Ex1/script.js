// 1. Create an array called colors where the value is a list of your favorite colors.
// 2. Loop through the array and as you loop console.log a string like so: “My #1 choice is blue”, “My #2 choice is red” ect… .


let colors = ["white", "grey", "black", "pink"];

colors.forEach(myFunction);

function myFunction(item, index){
	console.log("My #" + (index + 1) + " choice is " + item);
};


// 3. Bonus: Change it to console.log “My 1st choice”, “My 2nd choice”, “My 3rd choice”, picking the correct suffix for each number.
// 		Hint : create an array of suffixes to do the Bonus

let colors = ["white", "grey", "black", "pink"];
let suffixes = ["st", "nd", "rd", "th"];

for (let i = 0; i < colors.length; i++) {
	console.log("My " + (i + 1) + suffixes[i] + " choice is " + colors[i]);
};
