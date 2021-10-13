// 1.Create a function called checkBasket().
// 	It should:
// 		• prompt the user for an item
// 		• let the user know if the item is in the basket
// 		• Hint: Use the in keyword inside the conditional

let amazonBasket = {
    glasses: 1,
    books: 2,
    floss: 100
};

function checkBasket() {
	let basketItem = prompt("Tell me, what are you looking for?");
	if (basketItem in amazonBasket) {
		alert("Great, we have " + basketItem + " in the basket!");
	};
};

checkBasket();