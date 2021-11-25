// Analyse the code below, and before executing it, predict the outcome of the last line.

const sum = (a, b) => a + b;
const curriedSum = (a) => (b) => a + b;
const add5 = curriedSum(5);
add5(12); //17