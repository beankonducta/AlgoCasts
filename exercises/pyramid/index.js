// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a pyramid shape
// with N levels using the # character.  Make sure the
// pyramid has spaces on both the left *and* right hand sides
// --- Examples
//   pyramid(1)
//       '#'
//   pyramid(2)
//       ' # '
//       '###'
//   pyramid(3)
//       '  #  '
//       ' ### '
//       '#####'

function pyramid(n, row = 0, level = '') {
    if (row === n) return;

    if (n === level.length - 2) {
        console.log(level);
        pyramid(n, row + 1);
    }
    else {
        level += level.length < Math.floor(n / 2) - row + 2 || level.length > Math.floor(n / 2) + row - 2 ? " " : "#"
        pyramid(n, row, level);
    }
}

module.exports = pyramid;
