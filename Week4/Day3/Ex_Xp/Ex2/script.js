// 1. Using the map() method, say hello to the users using only their firstname 
//      (ie. “Hello Bradley”, “Hello Chloe” ect…)
// 2. Using the filter() method, congratulate only the Full Stack Residents.

let users = [{ firstName: 'Bradley', lastName: 'Bouley', role: 'Full Stack Resident' },
			{ firstName: 'Chloe', lastName: 'Alnaji', role: 'Full Stack Resident' },
			{ firstName: 'Jonathan', lastName: 'Baughn', role: 'Enterprise Instructor' },
			{ firstName: 'Michael', lastName: 'Herman', role: 'Lead Instructor' },
			{ firstName: 'Robert', lastName: 'Hajek', role: 'Full Stack Resident' },
			{ firstName: 'Wes', lastName: 'Reid', role: 'Instructor'},
			{ firstName: 'Zach', lastName: 'Klabunde', role: 'Instructor'}
];

let greeting = users.map((user, index) => "Hello " + users[index].firstName);
console.log(greeting);

let usersToCongratulate = users.filter((user, index) => users[index].role === "Full Stack Resident");
let congrats = usersToCongratulate.map((user, index) => "Congratulations " + usersToCongratulate[index].firstName);
console.log(congrats);


