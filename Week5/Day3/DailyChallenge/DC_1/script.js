// Create two functions that use promises which can be chained.
// The first function called makeAllCaps(), should take an array of words as an argument and capitalize them.
// The second function called sortWords(), should sort the words in alphabetical order.
// If the array contains anything but strings, it should throw an error.

const makeAllCaps = (words) => {
	return new Promise((resolve, reject) => {
		if (words.some((word) => typeof word !== 'string'))
			reject('The array contains more than just strings');
		else resolve(words.map((word) => word.toUpperCase()));
	});
  };
  
  const sortWords = (words) => {
	return new Promise((resolve, reject) => {
		if (words.some((word) => typeof word !== 'string'))
			reject('The array contains more than just strings');
		else resolve(words.sort());
	});
  };
  
  makeAllCaps(['asc', 'wfwf', 'ckoek'])
	.then(sortWords)
	.then((result) => console.log(result))
	.catch((error) => console.log(error));
  
  makeAllCaps(['asc', 'wfwf', 1, 'ckoek'])
	.then(sortWords)
	.then((result) => console.log(result))
	.catch((error) => console.log(error));