// 1. Add a “light blue” background color and some padding to the <div>.
// 2. Do not display the first name (John) in the list.
// 3. Add a border to the second name (Pete).
// 4. Change the font size of the whole body.
// 5. Bonus: If the background color of the div is “light blue”, alert “Hello x and y” (x and y are the users in the div).

let div = document.querySelector("div");
div.style.background = "lightblue";
div.style.padding = "3px";

let ul = document.querySelector("ul");
let x = ul.firstElementChild;
x.style.display = "none";

let y = ul.lastElementChild;
y.style.border = "lightblue 1px solid";

document.querySelector("body").style.fontSize = "37px";

if(div.style.background === "lightblue") {
    alert("Hello " + x.textContent + " and " + y.textContent);
};
