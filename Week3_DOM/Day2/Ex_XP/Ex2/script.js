// 1. Create a function called getBold_items() that takes no parameter. 
//      This function should collect all the bold items inside the paragraph.
// 2. Create a function called highlight() that changes the color of all the bold text to blue.
// 3. Create a function called return_normal() that changes the color of all the bold text back to black.
// 4. Call the function highlight() onmouseover (ie. when the mouse pointer is moved onto the paragraph), 
//      and the function return_normal() onmouseout (ie. when the mouse pointer is moved out of the paragraph). Look at this example

const paragraph = document.querySelector("p");

function getBoldItems() {
	let boldItems = document.querySelectorAll("strong");
	return boldItems;
}

function highlight() {
	boldItems = getBoldItems();
	setColor(boldItems, "blue");

};

function returnNormal() {
	boldItems = getBoldItems();
	setColor(boldItems, "black");
};

paragraph.addEventListener("mouseover", highlight);
paragraph.addEventListener("mouseout", returnNormal);

function setColor(items, color) {
	items.forEach (function (item) {
		item.style.color = color;
	});
};

