// 1. Create a variable called sentence. The value of the variable should be a string that contains the words “not” and “bad”. 
// 		For example, “The movie is not that bad, I like it”.
// 2. Create a variable called wordNot where it’s value is the first appearance of the substring “not” (from the sentence variable).
// 3. Create a variable called wordBad where it’s value is the first appearance of the substring “bad” (from the sentence variable).
// 4. If the word “bad” comes after the word “not”, you should replace the whole “not…bad” substring with “good”, then console.log the result.
// 		For example, the result here should be : “The movie is good, I like it”
// 5. If the word “bad” does not come after “not” or the words are not in the sentence, console.log the original sentence.


let str = "The dinner was not so bad! You should become a chef!"
let wordNot = str.indexOf("not");
let wordBad = str.indexOf("bad");

if (wordBad < wordNot || wordBad === -1 || wordNot === -1) {
	console.log(str);
} else if (wordBad > wordNot) {
	let result = str.replace(str.substring(wordNot, (wordBad + 3)), "good");
	console.log(result);
};