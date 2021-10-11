// 1. Ask the user which language they speak.

// 2. Convert the user’s answer to lowercase, so that all the user’s inputs will be accepted in the if statement. 
//	For example “english” or “English” or “ENGlish” ect…”

// 3. Create a few conditions :
// 		• If the user speaks French : display “Bonjour”
// 		• If the user speaks English : display “Hello”
// 		• If the user speaks Hebrew : display “Shalom”
// 		• If the user doesn’t speak any of these 3 languages: display ‘01110011 01101111 01110010 01110010 01111001’

let lang = prompt("Hello, tell me, which language do you speak?");
let langLowerCase = lang.toLowerCase();

switch (langLowerCase) {
	case "french":
		console.log("Bonjour");
		break;
	case "english":
		console.log("Hello");
		break;
	case "hebrew":
		console.log("Shalom");
		break;
	default:
		console.log("01110011 01101111 01110010 01110010 0111100");
};