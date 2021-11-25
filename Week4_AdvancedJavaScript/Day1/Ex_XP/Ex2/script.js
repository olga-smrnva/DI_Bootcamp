// You need to modify the function called experiencePoints()
// 		1. Create a variable called experiencePoints.
// 		2. Assign to this variable, a ternary operator (ie. change the conditional block into a ternary operator).

function winBattle(){
	return true;
};

function experiencePoints() {
	if (winBattle()) {
		return 10;
	} else {
		return 1;
	};
};

experiencePoints();

const experiencePoints = winBattle() ? 10 : 1;