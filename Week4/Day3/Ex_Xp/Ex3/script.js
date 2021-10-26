// Using this array use the reduce() method to combine all of these into a single string.

let epic = ['a', 'long', 'time', 'ago', 'in a', 'galaxy', 'far far', 'away'];

let newArr = epic.reduce((accumulator, value) => `${accumulator} ${value}`);
console.log(newArr);