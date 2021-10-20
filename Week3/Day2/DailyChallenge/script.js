// 1. Get the value of each of the inputs in the HTML file when the button is clicked.
// 2. Make sure the values are not empty
// 3. Write a story that uses each of the values.
// 4. Make sure you check the console for errors when playing the game.
// 5. Bonus: Add a “shuffle” button to the HTML file, when clicked the button should change the story currently displayed 
// 		(but keep the values entered by the user). The user could click the button at least three times and get a new story. 
// 		Display the stories randomly.

const words = {};
const libButton = document.querySelector("#lib-button");
const userInputs = document.querySelectorAll("input");
const finalStory = document.querySelector("#story");

function inputLenghtCheck(input) {
	if (input.length > 0) {
		return true;
	};
};

libButton.addEventListener("click", function () {
    let check = true;
    userInputs.forEach(function (userInput) {
   		const input = userInput.value;
   		if (inputLenghtCheck(input)) {
   			words[userInput.getAttribute("id")] = input;
  		} else {
            return check = false;
        };
    });
    if (check) {
    finalStory.textContent = storyMaker(words);
    };
});

function storyMaker(words) {
    return `Once upon a time there lived a ${words.noun} in ${words.adjective} country full of dragons and flamingos. 
    ${words.person} was the king of that land. He decided to ${words.verb} all the citizens. 
    Our hero didn't like that, took all the dragons and flamingos away and created his own country, now known as ${words.place}, where they still live happily ;-)`
};
