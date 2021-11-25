// Create an input type text that takes/shows only letters.
// Hint: use the keyup or the keydown events and remove any character that is not a letter.
// Hint : Check out keycodes in Javascript or Regular Expressions

const input = document.getElementById("input");

input.addEventListener("keydown", checkInput);

function checkInput(event) {
	event.preventDefault();
	const key = event.keyCode;

	if (key >= 65 && key <=90) {
		input.value += event.key;
	};
};

