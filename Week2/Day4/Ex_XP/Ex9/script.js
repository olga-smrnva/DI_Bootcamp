// 1. Define a function called hotelCost().
// 		• It should ask the user for the number of nights they would like to stay in the hotel.
// 		• If the user doesn’t answer or if the answer is not a number, ask again.
// 		• The hotel costs $140 per night. The function should return the total price of the hotel.


function hotelCost() {
	let numOfNights = 0;

	do {
		numOfNights = Number(prompt("For how many night do you want to stay in the hotel?"))
	} while (!numOfNights);

	return numOfNights * 140 + "$";
};

// hotelCost();


// 2. Define a function called planeRideCost().
// 		• It should ask the user for their destination.
// 		• The function should return a different price depending on the location.
// 			- “London”: 183$
// 			- “Paris” : 220$
// 			- All other destination : 300$

function planeRideCost() {
	let dest = prompt("Where do you fly?").toLowerCase();

	if (dest === "london") {
		return 183 + "$";
	} else if (dest === "paris") {
		return 220 + "$";
	} else {
		return 300 + "$";
	};
};

// planeRideCost();


// 3. Define a function called rentalCarCost().
// 		• It should ask the user for the number of days they would like to rent the car.
// 		• If the user doesn’t answer or if the answer is not a number, ask again.
// 		• Calculate the cost to rent the car. The car costs $40 everyday.
// 			- If the user rents a car for more than 10 days, they get a 5% discount.
// 		• The function should return the total price of the car rental.

function rentalCarCost() {
	let numOfDays = 0;

	do {
		numOfDays = Number(prompt("For how many days do you want to rent a car?"))
	} while (!numOfDays);

	if (numOfDays <= 10) {
		return numOfDays * 40 + "$";
	} else {
		return (numOfDays * 40) * 0.95 + "$";
	};
};

// rentalCarCost();


// 4. Define a function called totalVacationCost() that returns the total cost of the user’s vacation 
// by calling the 3 functions that you created above.
// 	Example : The car cost: $x, the hotel cost: $y, the plane tickets cost: $z.
// 		Hint: You have to call the functions hotelCost(), planeRideCost() and rentalCarCost() 
// 		inside the function totalVacationCost.

function totalVacationCost() {
	console.log("The car cost " + rentalCarCost() + ", the hotel cost " + hotelCost() + ", the plane cost " + planeRideCost());
};


// 5. Call the function totalVacationCost()
totalVacationCost();


// 6. Bonus: Instead of using a prompt inside the 3 first functions, only use a prompt inside the totalVacationCost() function.

function hotelCost2(numOfNights) {
	
	return numOfNights * 140 + "$";
};

function planeRideCost2(dest) {

	if (dest === "london") {
		return 183 + "$";
	} else if (dest === "paris") {
		return 220 + "$";
	} else {
		return 300 + "$";
	};
};

function rentalCarCost2(numOfDays) {
	
	if (numOfDays <= 10) {
		return numOfDays * 40 + "$";
	} else {
		return (numOfDays * 40) * 0.95 + "$";
	};
};

function totalVacationCost2 () {

 	let numOfDays = 0;
	do {
		numOfDays = Number(prompt("For how many days do you want to rent a car?"))
	} while (!numOfDays);

	let numOfNights = 0;
	do {
		numOfNights = Number(prompt("For how many night do you want to stay in the hotel?"))
	} while (!numOfNights);

	let dest = prompt("Where do you fly?").toLowerCase();

	console.log("The car cost " + rentalCarCost2(numOfDays) + ", the hotel cost " + hotelCost2(numOfNights) + 
		", the plane cost " + planeRideCost2(dest));
};

totalVacationCost2();

