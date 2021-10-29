// Create a function that takes in two strings as two parameters and returns a boolean 
// that indicates whether or not the first string is an anagram of the second string.

// • What is an anagram? An anagram is another word or phrase formed by rearranging letters of the first word or phrase.

// • Example of anagrams
//      "Astronomer" is an anagram of "Moon starer"
//      "School master" is an anagram of "The classroom"
//      "The Morse Code" is an anagram of "Here come dots"

// • Do we need to consider whitespace? Trim whitespace prior to comparison.

const isAnagram = function(str1, str2) {
    if (str1.replace(/\s+/g, "").length !== str2.replace(/\s+/g, "").length) return false;

    const arr1 = [...str1.replace(/\s+/g, "").toLowerCase()];
    const arr2 = [...str2.replace(/\s+/g, "").toLowerCase()];
    
    if (arr1.sort().join("") === arr2.sort().join("")) return true; 
    return false;
};

console.log(isAnagram("Astronooomer", "Mmmoon starer")); //false
console.log(isAnagram("School master", "The classroom")); //true

