// Create a function that takes in two strings as two parameters and returns a boolean 
// that indicates whether or not the first string is an anagram of the second string.

const isAnagram = function(str1, str2) {
    if (str1.replace(/\s+/g, "").length !== str2.replace(/\s+/g, "").length) return false;

    const arr1 = [...str1.replace(/\s+/g, "").toLowerCase()];
    const arr2 = [...str2.replace(/\s+/g, "").toLowerCase()];
       
    if (arr1.sort().join("") === arr2.sort().join("")) return true; 
    return false;
};

console.log(isAnagram("Astronooomer", "Mmmoon starer")); //false
console.log(isAnagram("The Morse Code", "Here come dots")); //true