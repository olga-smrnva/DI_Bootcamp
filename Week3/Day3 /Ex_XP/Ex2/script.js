const drag = document.querySelectorAll(".drag")
const drop = document.querySelector(".drop")

let tempStorage = null;

for (const d of drag) {
	d.addEventListener("dragstart", function (e) {
		tempStorage = e.target;
	});
};

	drop.addEventListener("dragover", function (e) {
		e.preventDefault();
});

drop.addEventListener("drop", function (e) {
	if (tempStorage) {
		e.target.appendChild(tempStorage);
	};
});
