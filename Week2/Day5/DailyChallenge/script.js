// 1. Prompt the user for a number to begin counting down bottles.
// 2. In the song everytime a bottle falls we subtract the bottles by 1.
// 	• What your code should do is:
// 		• instead of subtracting by 1, everytime a bottle drops the subtracted number should go up by 1
// 		• For example the first time a bottle drops we subtract by 1, the second time we subtract by 2 and so on.


const startNumBottles = Number(prompt("Please enter a number")); 
let currentNumBottles = startNumBottles; 
 
for (i = 1; i <= startNumBottles; i++) { 
  console.log(`${currentNumBottles} bottles of beer on the wall`); 
  console.log(`${currentNumBottles} bottles of beer`); 
 
  currentNumBottles--; 
 
  console.log(`Take ${i} down, pass ${i === 1 ? 'it' : 'them'} around`); 
  console.log(`${currentNumBottles} bottles of beer on the wall`); 
}