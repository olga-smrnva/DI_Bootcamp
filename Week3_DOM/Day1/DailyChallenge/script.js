// 1. Create an array which value is the planets of the solar system.
// 2. For each planet in the array, create a <div> using createElement. This div should have a class named "planet".
// 3. Each planet should have a different background color. (Hint: add a new class to each planet).
// 4. Finally append each div to the <section> in the HTML (presented below).
// 5. Bonus: Do the same process to create the moons.
// 	• Be careful, each planet has a certain amount of moons. How should you display them?
// 	• Should you still use an array for the planets? Or an array of objects?

let section = document.querySelector("section");
let planets = [
	{
	  name: "Mercury",
	  moon: 0,
	  color: "red"
	},
	{
	  name: "Venus",
	  moon: 0,
	  color: "lightgreen"
	},
	{
	  name: "Earth",
	  moon: 1,
	  color: "lightBlue"
	},
	{
	  name: "Mars",
	  moon: 2,
	  color: "violet"
	},
	{
	  name: "Jupiter",
	  moon: 79,
	  color: "lightyellow"
	},
	{
	  name: "Saturn",
	  moon: 82,
	  color: "orange"
	},
	{
	  name: "Uranus",
	  moon: 27,
	  color: "lightgrey"
	},
	{
	  name: "Neptune",
	  moon: 14,
	  color: "lightpink"
	},
  ];

planets.forEach(function(planet) {
	let planetDiv = document.createElement("div");

	planetDiv.classList.add("planet");
	planetDiv.style.backgroundColor = planet.color;
	planetDiv.textContent = planet.name;
	section.appendChild(planetDiv);

	for (let i = 0; i < planet.moon; i++) {
		let moonDiv = document.createElement("div");

		moonDiv.classList.add("moon");
		moonDiv.textContent = i+1;
		planetDiv.appendChild(moonDiv);
	}
});
