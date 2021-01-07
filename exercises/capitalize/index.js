// --- Directions
// Write a function that accepts a string.  The function should
// capitalize the first letter of each word in the string then
// return the capitalized string.
// --- Examples
//   capitalize('a short sentence') --> 'A Short Sentence'
//   capitalize('a lazy fox') --> 'A Lazy Fox'
//   capitalize('look, it is working!') --> 'Look, It Is Working!'

function capitalize(str) {
    const arr2 = [];
    for(let word of str.split(" ")) {
        let a = word[0].toUpperCase();
        word = word.slice(1);
        arr2.push(a + word);
    }
    return arr2.join(" ");
}

module.exports = capitalize;
