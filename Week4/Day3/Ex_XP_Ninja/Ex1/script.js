// 1. Using this array Use a for loop to get this output { x: 1, y: 1, z: 2 };
// 2. Use the reduce() method to get this output { x: 1, y: 1, z: 2 };

const letters = ['x', 'y', 'z', 'z'];
const obj = {};

let count = (arr, elem) => {
    let counter = 0;
    arr.forEach(arrElem => {
        if (arrElem === elem) {
            counter++;
        };
    }); return counter;
};




//         let arr = ['a', 'b', 'c'];
//         let obj = arr.reduce((ac, a) => ({ ...ac, [a]: '' }), {});
//         console.log(obj);
//     });


















//         for (let i = 0; i < letters.length; i++) {
//             obj[i] = letters[i];
//         };


//         console.log(obj);

//         var target = {};['a', 'b', 'c'].forEach(key => target[key] = "");
// }