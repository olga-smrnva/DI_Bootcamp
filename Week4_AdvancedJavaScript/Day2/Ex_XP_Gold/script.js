// Using the code below, and before executing it, 
// predict the outcome and explain how you came to this conclusion

let landscape = function()
{
	let result = "";
	let flat = function(x) {
   		for(let count = 0; count<x; count++) {
	 		result = result + "_";	
   		};
 	};

	let mountain = function(x) {
		result = result + "/" 
   		for(let counter = 0; counter<x; counter++) {
			result = result + "'" 
   		};
	result = result + "\\"; 
	};

	flat(4); //____
	mountain(4); //____/''''\ (Here we have \ in input, because we usually use this sign before some
	// 							special print commands, like \n. And to print this very sign we use \\)
	flat(4) //____/''''\____
	return result;
}

console.log(landscape()); //____/''''\____

