// 1. Using DOM methods, remove the last paragraph in the <article> tag from the DOM.
// 2. Add an event listener which will change the background color of the h2 tag from the DOM when clicked on.
// 3. Set the font size of the h1 tag to a random pixel size between 0 to 100.(Check out this documentation)
// 4. Add an event listener which will hide the h3 when it’s clicked on (use the display property).
// 5. Add a <button> to the HTML file, that when clicked on, should make the text of all the paragraphs, bold.
// 6. When the “Submit” button of the form is clicked:
//     • get the values of the input tags
//     • make sure that they are not empty,
//     • then append them to a HTML table, in the div, below the form.
// 7.When you hoover on the 2nd paragraph, it should fade out (Check out “fade css animation” on Google)

const article = document.querySelector("article");
const paragraphs = document.querySelectorAll("p");
const h1 = document.querySelector("h1");
const h2 = document.querySelector("h2");
const h3 = document.querySelector("h3");
const button = document.querySelector("button");
const submitButton = document.querySelector("#submit");
const firstNameInput = document.querySelector("#fname");
const lastNameInput = document.querySelector("#lname");
const divAnswers = document.querySelector(".usersAnswer");

article.removeChild(article.lastElementChild);

h2.addEventListener("click", function(){
	h2.style.background = "lightpink";
});

h1.style.fontSize = (Math.floor(Math.random() * 100) + 1) + "px";

h3.addEventListener("click", function(){
	h3.style.display = "none";
});

button.addEventListener("click", function(){
	paragraphs.forEach (function(p) {
		p.style.fontWeight = "bold";
	});
});

const table = document.createElement("table");
divAnswers.appendChild(table);

submitButton.addEventListener("click", function(event) {
	event.preventDefault();
	if (firstNameInput.value.length > 0 && lastNameInput.value.length > 0) {
		const firstName = firstNameInput.value;
		const lastName = lastNameInput.value;

		const row = document.createElement("tr");
		table.appendChild(row);

		const column = document.createElement("td");
		column.style.border = "1px solid black";
		row.appendChild(column);

		const textNode= document.createTextNode(firstName + " " + lastName);
		column.appendChild(textNode);
	};
});

paragraphs[1].addEventListener("mouseover", function(event) {
	event.target.classList.add("fadeAnimation");

});
