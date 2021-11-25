// 1. Using this object and methods taught in class, turn the users object into an array:
//         Excepted output: [[ 'user1', 18273 ], [ 'user2', 92833 ], [ 'user3', 90315 ]]
//         FYI : The number is their ID number.

// 2. Modify the outcome of part 1, by multipling the user’s ID by 2.
//         Excepted output: [[ 'user1', 36546 ], [ 'user2', 185666 ], [ 'user3', 180630 ]]

const users = {user1: 18273, user2: 92833, user3: 90315};
const usersArr = Object.entries(users);
console.log(usersArr);

usersArr.forEach(elem => elem[1] = elem[1] * 2);
console.log(usersArr);