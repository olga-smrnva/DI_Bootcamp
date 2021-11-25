// 1. Using a method, take this array and modify it to look like this array: [1,2,3,[4],[5]];
// Bonus Try to do it on one line.

const array = [[1],[2],[3],[[[4]]],[[[5]]]];
const flatten = array.flat(2);
console.log(flatten); //[1,2,3,[4],[5]]

// 2. Using a method, take this array 
// and modify it to look like this array: ['Hello young grasshopper!', 'you are', 'learning fast!'];
const greeting = [["Hello", "young", "grasshopper!"], ["you", "are"], ["learning", "fast!"]]; 
let newArr = [];
for (let i =0; i < greeting.length; i++) {
    newArr[i] = greeting[i].join(" ");
};
console.log(newArr); //['Hello young grasshopper!', 'you are', 'learning fast!']


// 3. Turn the greeting array into a string: ‘Hello young grasshopper you are learning fast!’
const stringGreet = newArr.join(" ");
console.log(stringGreet); //Hello young grasshopper! you are learning fast!

// 4. Turn the trapped number 3 into: [3]
const trapped = [[[[[[[[[[[[[[[[[[[[[[[[[[3]]]]]]]]]]]]]]]]]]]]]]]]]] 
const free = trapped.flat(25);
console.log(free); //[3]