// Write a JavaScript function that checks whether the value of an input is a string or not.

const isString = function(input) {
	return typeof(input) === "string" ? true : false;
};

console.log(isString("hello")); 
//true
console.log(isString([1, 2, 4, 0]));
//false