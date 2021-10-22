// Recreate the todo list:

// 1. Create an HTML, CSS and a JS file.

// 2. In the HTML file
// 	• create a form with one input type="text", and a “Submit” button.
// 	• add an empty div below the form <div class="listTasks"></div>

// 3. In the js file, you must add the following functionalities:
// 	a. Create an empty array : let listTasks = [];

// 	b. Create a function called addTask(). As soon as the user clicks on the button:
// 		• check that the input is not empty,
// 		• then add it to the array (ie. add the text of the task)
// 		• then add it to the DOM, below the form (in the <div class="listTasks"></div>) .
// 		• Each new task added should have:
// 			ø an input type="checkbox"
// 			ø a “X” button. Use font awesome for the “X” button.


const addButton = document.getElementById("submit");
const input = document.getElementById("userinput");
const listOfTasks = document.querySelector(".listTask");
let listTasks = [];


addButton.addEventListener("click", addTask);

function inputLenghtCheck() {
	if (input.value.length > 0) {
		return true
	};
};


function addTask(event) {
	event.preventDefault();

	if (inputLenghtCheck()) {
		listTasks.push(input.value);
		
		let newTask = document.createElement("div");
		newTask.appendChild(document.createTextNode(input.value));

		console.log(newTask);

		let newInput = document.createElement("input");
		newInput.setAttribute("type", "checkbox");

		console.log(newInput)

		let newButton = document.createElement("button");
		newButton.setAttribute("font", "awesome");
		newButton.appendChild(document.createTextNode("X"))

		console.log(newButton)

		newTask.appendChild(newInput);
		newTask.appendChild(newButton);

		console.log(newTask)
		
		listOfTasks.appendChild(newTask);

		console.log(listOfTasks)
		
		input.value = "";

		// listTasks.push(newTask);
		// console.log(input.value);
		// console.log(listTasks);
	} else {
		alert("Don't forget to add a task!");
	};
};

