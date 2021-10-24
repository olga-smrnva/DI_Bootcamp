// In this exercise, you have to decide which type of variables you have to use:

// 1. Create a global variable called bankAmount which value is the amount of money currently in your account.
// 2. Create a variable that saves the % amount of VAT (In Israel, it’s 17%).
// 3. Create an array with all your monthly expenses - both positive and negative (money made and money spent).
// 		Example : let details = ["+200", "-100", "+146", "+167", "-2900"]
// 4. Create a program that modifies the expenses (ie. the expenditures, ie. the negative expenses) 
// 		so that they will include taxes (multiply each expense by the VAT).
// 5. Display your current bankAccount standing at the end of the month.

const ammountVAT = 17;
let bankAccount = 0;
let details = ["+200", "-100", "+146", "+167", "-2900", "+100500"];

let addTaxes = function(arr) {
	arr.forEach(function(element) { 
		element = Number(element);
		element > 0 ? element -= element / 100 * ammountVAT : element;
		bankAccount += element;
	});
	console.log(bankAccount);
};

addTaxes(details);

