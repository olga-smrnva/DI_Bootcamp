// Analyze this code, what will be the output?

[[0, 1], [2, 3]].reduce(
  (acc, cur) => {
    return acc.concat(cur); // 0, 1, 2, 3
  },
  [1, 2], // <-- initial value
);
// 1, 2, 0, 1, 2, 3