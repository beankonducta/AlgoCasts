// --- Directions
// Write a function that returns the number of vowels
// used in a string.  Vowels are the characters 'a', 'e'
// 'i', 'o', and 'u'.
// --- Examples
//   vowels('Hi There!') --> 3
//   vowels('Why do you ask?') --> 4
//   vowels('Why?') --> 0

// iterative

// function vowels(str) {
//     let count = 0;
//     for(let letter of str) {
//         if(['a', 'e', 'i', 'o', 'u'].indexOf(letter.toLowerCase()) !== -1) count ++;
//     }
//     return count;
// }

// regex

function vowels(str) {
    const matches = str.match(/[aeiou]/gi);
    return matches ? matches.length : 0;
}

module.exports = vowels;
