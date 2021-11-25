// Analyse the code below, and before executing it, predict the outcome of the last line.

const sum = (a, b) => a + b;
const curriedSum = (a) => (b) => a + b;
curriedSum(30)(1); //31