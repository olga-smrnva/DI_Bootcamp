let fruits = ["Banana", "Apples", "Oranges", "Blueberries"];

// Remove Banana from the array.
fruits.shift();
console.log(fruits);
//output: ['Apples', 'Oranges', 'Blueberries']

// Sort the array in alphabetical order.
fruits.sort();
console.log(fruits);
//output: ['Apples', 'Blueberries', 'Oranges']

// Add “Kiwi” to the end of the array.
fruits.push("Kiwi");
console.log(fruits);
//output: ['Apples', 'Blueberries', 'Oranges', 'Kiwi']

// Remove “Apples” from the array. Don’t use the same method as in part 1.
fruits.splice(0,1);
console.log(fruits);
//output: ['Blueberries', 'Oranges', 'Kiwi']

/* Sort the array in reverse order. 
(Not alphabetical, but reverse the current Array i.e. [‘a’, ‘c’, ‘b’] becomes [‘b’, ‘c’, ‘a’])
At the end you should see this outcome: ["Kiwi", "Oranges", "Blueberries"] */
fruits.reverse();
console.log(fruits);
//output: ['Kiwi', 'Oranges', 'Blueberries']