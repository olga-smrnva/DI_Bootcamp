// 1. In the HTML above change the name “Pete” to “Richard”.
// 2. Change each first name of the two <ul>'s to your name.
// 3. At the end of each <ul> add a <li> that says “Hey students”.
// 4. Delete the name Sarah from the second <ul>.

// 5. Bonus
//     • Add a class called student_list to both of the <ul>'s.
//     • Add the classes university and attendance to the first <ul>.

let uls = document.querySelectorAll("ul");
uls[0].lastElementChild.textContent = "Richard";

uls.forEach(function (ul) {
    ul.firstElementChild.textContent ="Olga";
});

uls.forEach(function (ul) {
    let li = document.createElement("li");
    li.appendChild(document.createTextNode("Hey students"));
    ul.appendChild(li);
});

uls[1].removeChild(uls[1].children[1]);

uls.forEach(function(ul) {
    ul.classList.add("student_list");
})

uls[0].classList.add("university", "attendance");