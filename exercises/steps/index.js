// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a step shape
// with N levels using the # character.  Make sure the
// step has spaces on the right hand side!
// --- Examples
//   steps(2)
//       '# '
//       '##'
//   steps(3)
//       '#  '
//       '## '
//       '###'
//   steps(4)
//       '#   '
//       '##  '
//       '### '
//       '####'

// initial
// function steps(n) {
//     let print = "";
//     for(let i = 1; i <= n; i++) {
//         print += "#";
//         for(let j = i; j > 1; j--) {
//             print += "#";
//         }
//         for(let k = i; k < n; k++) {
//             print += " ";
//         }
//         console.log(print);
//         print = "";
//     }
// }

// cleaned up
// function steps(n) {
//     for(let i = 1; i <= n; i++) {
//         let print = "";
//         for(let j = 0; j < n; j++) {
//             if(j < i) print += "#"
//             else print += " "
//         }
//         console.log(print)
//     }
// }

// recursive
function steps(n, row = 0, stair = '') {
    if(row === n) return;
   
    if(n === stair.length) {
        console.log(stair);
        steps(n, row + 1);
    }
    else {
        stair += stair.length <= row ? "#" : " ";
        steps(n, row, stair);
    }
}

module.exports = steps;
