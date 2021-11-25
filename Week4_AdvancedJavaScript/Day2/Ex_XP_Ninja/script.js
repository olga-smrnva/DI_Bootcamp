// 1. Create a function such as mergeWords('Hello')() that returns the following string: 'Hello'
// 2. When the function is called without any arguments return a string where all words 
//      have been merged into a sentence.
// 3. Below is a verbose JavaScript solution, turn this into a currying function.

function mergeWords(string) {
	return function(nextString) {
	  if (nextString === undefined) {
		return string;
	  } else {
		return mergeWords(string + ' ' + nextString);
	  };
	};
};

const words = mergeWords("hello")("ololo")(); // hello ololo

console.log(words);
