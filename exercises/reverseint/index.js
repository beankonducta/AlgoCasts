// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

function reverseInt(n) {
    const sign = Math.sign(n);
    const rev = Math.abs(n)
    .toString()
    .split('')
    .reduce((r, c) => c + r);
    return +rev * sign;
}

module.exports = reverseInt;
