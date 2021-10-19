// 1. In the <div> above, change the value of the id attribute from navBar to socialNetworkNavigation, using the setAttribute method.

let div = document.querySelector("div");
div.setAttribute("id", "socialNetworkNavigation");


// 2. We are going to add a new <li> to the <ul>.
//     • First, create a new <li> tag (use the createElement method).
//     • Create a new text node with “Logout” as its specified text.
//     • Append the text node to the newly created list node (li).
//     • Finally, append this updated list node to the unordered list above, using the appendChild method.

let ul = document.querySelector("ul");

let li = document.createElement("li");
li.appendChild(document.createTextNode("Logout"));
ul.appendChild(li);


// 3. Bonus
// Use the firstElementChild and the lastElementChild properties to retrieve the first and last li elements 
// from their parent element (ul). Display the text of each link. (Hint: use the textContent property).

let firstChildUl = ul.firstElementChild; //Profile
let lastChildUl = ul.lastElementChild; //Logout

console.log(firstChildUl.textContent, lastChildUl.textContent);