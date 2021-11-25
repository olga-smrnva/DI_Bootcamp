let morse = `{
	"0": "-----",
	"1": ".----",
	"2": "..---",
	"3": "...--",
	"4": "....-",
	"5": ".....",
	"6": "-....",
	"7": "--...",
	"8": "---..",
	"9": "----.",
	"a": ".-",
	"b": "-...",
	"c": "-.-.",
	"d": "-..",
	"e": ".",
	"f": "..-.",
	"g": "--.",
	"h": "....",
	"i": "..",
	"j": ".---",
	"k": "-.-",
	"l": ".-..",
	"m": "--",
	"n": "-.",
	"o": "---",
	"p": ".--.",
	"q": "--.-",
	"r": ".-.",
	"s": "...",
	"t": "-",
	"u": "..-",
	"v": "...-",
	"w": ".--",
	"x": "-..-",
	"y": "-.--",
	"z": "--..",
	".": ".-.-.-",
	",": "--..--",
	"?": "..--..",
	"!": "-.-.--",
	"-": "-....-",
	"/": "-..-.",
	"@": ".--.-.",
	"(": "-.--.",
	")": "-.--.-"
  }`;
// Create three functions that use promises which can be chained.

// Call the first function toJs():
// this function should take the morse json object provided above, and convert it to a morse javascript object.
// if the morse javascript object is empty, throw an error (use reject)
// else return morse javascript object (use resolve)

// The second function called toMorse(morseJS), takes one argument: the new morse javascript object.
// This function should asks the user for a word or a sentence
// if the user entered a character that doesn’t exist in the new morse javascript object, throw an error. (use reject)
// else return an array with it’s morse translation of the user’s word.

// The last function called joinWords(), should join the morse translation by using line break.
  
const toJs = (json) => {
	return new Promise((resolve, reject) => {
		const jsObj = JSON.parse(json);
		if (Object.keys(jsObj).length < 1) reject('Object is empty');
		else resolve(jsObj);
	});
  };
  
const toMorse = (morseJS) => {
	return new Promise((resolve, reject) => {
		userTextArr = prompt('Enter a word or a sentence')
			.toLowerCase()
			.replace(/\s+/g, '')
			.split('');
		console.log(userTextArr);
	  userTextArr.forEach((char) => {
		if (!morseJS[char])
			reject(`"${char}" character doesn’t exist in the morse code`);
		});
		resolve(userTextArr.map((char) => morseJS[char]));
	});
  };
  
const joinWords = (morseArr) => {
	return Promise.resolve(morseArr.join('\n'));
  };
  
toJs(morse)
	.then((result) => toMorse(result))
	.then((result) => joinWords(result))
	.then((result) => console.log(result))
	.catch((error) => console.log(error));