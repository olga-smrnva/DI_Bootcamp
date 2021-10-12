// 1. Write a JavaScript program that recreates the pattern below.
// 2. Do this challenge twice: first by using one loop, then by using two nested for loops 
//		(Nested means one inside the other - check out “nested for loops” on Google).
// 3. Do this Daily Challenge by youself, without looking at the answers on the internet.


//using one loop
let a = "";

for (let i = 1; i <= 6; i++) {
	a += "*".repeat(i) + '\n';
};
console.log(a);


// using two nested for loops
let a = "";

for (let i = 1; i <= 6; i++) {
	let b = "";
		for(let x=0; x < i; x++){
			b += "*"
		}
	a += b + "\n"; 
};
console.log(a);



