const div = document.querySelector("#animate");

function myMove() {
	const timeToAct = setInterval(move, 10);
	let position = 0;

	function move() {
		position++;
		div.style.left = position + "px";
	
		if (position === 350) {
			clearInterval(timeToAct);
		};
	};
};

