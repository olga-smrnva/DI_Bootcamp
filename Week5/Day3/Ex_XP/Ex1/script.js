// Create a function called compareToTen that takes a number as an argument.
// The function should return a Promise that tests if the value of the given argument is less or greater than 10.

function compareToTen(n) {
	return new Promise((resolve, reject) => {
	  if (n > 10) resolve(`${n} is greater than 10, success!`);
	  else reject(`${n} is less than 10, error!`);
	});
  };
  
compareToTen(15)
	.then((result) => console.log(result))
	.catch((error) => console.log(error));
  
compareToTen(8)
	.then((result) => console.log(result))
	.catch((error) => console.log(error));