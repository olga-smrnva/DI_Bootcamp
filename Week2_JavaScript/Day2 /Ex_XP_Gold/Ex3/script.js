// 1. Prompt the user for a string. It must be a verb.
// 2. If the length of the string is at least 3 and the string doesn’t end with “ing”, add ‘ing’ to the end of the string.
// 3. If the length of the string is at least 3 and the string ends with “ing” add “ly” to it’s end.
// 4. If the length of the string is less than 3, leave it unchanged.

let str = prompt("Enter a verb, please");
let length = str.length;

if (length >= 3) {
	if (!str.endsWith("ing")) {
		str = str + "ing";
	} else if (str.endsWith("ing")) {
		str = str + "ly";
	};
};