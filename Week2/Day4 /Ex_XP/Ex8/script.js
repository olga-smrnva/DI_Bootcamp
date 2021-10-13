// John created a simple tip calculator to help calculate how much to tip when he and his family go to restaurants.

// The calculator has the following rules:
// 1. Tip 20% when the bill is less than $50,
// 2. Tip 15% when the bill is between $50 and $200,
// 3. Tip 10% if the bill is more than $200.

// ToDo:
// 1. Ask John for the amount of the bill.
// 2. Create the program explained above.
// 3. In the end, John would like to know:
// 		• Tip amount.
// 		• Final bill (bill + tip).
// 		(NOTE: To calculate 20% of a value, simply multiply it with 20/100 = 0.2)

let amount = Number(prompt("What's the amount of the bill?"));

function tipCalculator(billAmount) {
	let tip = 0;
	if (billAmount < 50) {
		tip = billAmount * 0.2;
	} else if (billAmount >= 50 && billAmount < 200) {
		tip = billAmount * 0.15;
	} else {
		tip = billAmount * 0.1;
	};
	console.log("The amount of tip is " + tip + ", and the final bill is " + (amount + tip));
};


tipCalculator(amount);