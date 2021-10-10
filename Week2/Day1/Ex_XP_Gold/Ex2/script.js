// Create 2 variables. The values should be strings. For example: let str1 = "mix" let str2 = "pod"
// Slice out and swap the first 2 characters of the 2 strings from part 1.
// Create a third variable where the value is the concatenation of the two strings from the part 1 (separated by a space).
// Finally console.log the new concatenated string.

let str1 = "Lolly";
let str2 = "Pop";

let sl1 = str1.slice(0,1);
let sl2 = str2.slice(0,1);

let newStr1 = sl2.concat(str1.substring(1));
let newStr2 = sl1.concat(str2.substring(1));

let result = newStr1.concat(' ', newStr2);
console.log(result);
//output: Polly Lop
