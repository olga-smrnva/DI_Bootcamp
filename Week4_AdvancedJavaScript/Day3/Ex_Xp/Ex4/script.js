// Use the filter() method to congratulate the students that passed the course.

let student = [{name: "Ray", course: "Computer Science", isPassed: true}, 
				{name: "Liam", course: "Computer Science", isPassed: false}, 
				{name: "Jenner", course: "Information Technology", isPassed: true}, 
				{name: "Marco", course: "Robotics", isPassed: true}, 
				{name: "Kimberly", course: "Artificial Intelligence", isPassed: false}, 
				{name: "Jamie", course: "Big Data", isPassed: false}
];

let studentsPassed = student.filter((value, index) => student[index].isPassed === true);

let congrats = studentsPassed.map((value, index) => "Congratulations " + studentsPassed[index].name);
console.log(congrats);