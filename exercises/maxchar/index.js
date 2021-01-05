// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
    const chars = {};
    let arr = [];
    for(let char of str) {
        if(!chars[char]) chars[char] = 1 
        else chars[char] += 1
    }
    arr = Object.entries(chars).sort((a, b) => b[1] - a[1]);
    return arr[0][0];
}

module.exports = maxChar;