// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

function reverse(str) {
    let arr = str.split("");
    let rtrn = "";
    debugger;
    for (let i = arr.length - 1; i > -1; i--)
        rtrn += arr[i];
    return rtrn;
}

module.exports = reverse;
