// 1. Prompt the user for several words (separated by commas).
// 2. Put the words into an array.
// 3. Console.log the words one per line, in a rectangular frame as seen below.
// 4. Check out the Hints and Requirements below.

let answer = prompt("Please, enter several words (separated by commas)");
let arr = answer.split(',');
console.log(noCommas);

// 1. To find the largest word in the array
let maxLenght = 0;
for (i in arr) {
  if (arr[i].length > maxLenght) {
    maxLenght = arr[i].length;
  };
};

// 2. To generate top-buttom frame
const topButtomFrame = '*'.repeat(maxLenght + 4);

// 3. To console.log words in frame
console.log(topButtomFrame);
for (i in arr) {
  const fixedWorld = arr[i].trim().padEnd(maxLenght, ' ');
  // trim() for delete psaces, padEnd() for add spaces to the end of the string to get same length
  console.log('* ' + fixedWorld + ' *');
};

console.log(topButtomFrame);


