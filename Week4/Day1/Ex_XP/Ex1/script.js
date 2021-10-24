// Analyse the code below, and predict what will be the value of a in all the following functions.
// Write your prediction as comments in a js file.

// #1
function q1() {
	var a = 5;
	if(a > 1) {
		a = 3;
	}
	alert(a); //3
}

//#2
var a = 0;
function q2() {
	a = 5; 
}

function q22() {
	alert(a); //5
}


//#3
function q3() {
	window.a = "hello"; 
}


function q32() {
	alert(a); // hello
}

//#4
var a = 1;
function q4() {
	var a = "test";
	alert(a); // test
}

//#5
var a = 2;
if (true) {
	var a = 5;
	alert(a); //5
	console.log("5_1   " + a);
}
alert(a); //5
