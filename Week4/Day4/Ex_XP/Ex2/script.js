// 1. Create a function called displayStudentInfo(studentObject) that accepts an object as a parameter.
//         For example displayStudentInfo({first: 'Elie', last:'Schoppik'}).
// 2. Destructure the parameter inside the function and return a string as the example seen below:

let displayStudentInfo = function(studentObject) {
	const {first, last} = studentObject;
	console.log(`Your full name is ${first} ${last}`);
};

displayStudentInfo({first: "Elie", last: "Schoppik"});
// output : 'Your full name is Elie Schoppik'