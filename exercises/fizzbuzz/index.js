// --- Directions
// Write a program that console logs the numbers
// from 1 to n. But for multiples of three print
// “fizz” instead of the number and for the multiples
// of five print “buzz”. For numbers which are multiples
// of both three and five print “fizzbuzz”.
// --- Example
//   fizzBuzz(5);
//   1
//   2
//   fizz
//   4
//   buzz


// TWO WAYS TO SOLVE


// function fizzBuzz(n) {
//     for(let i = 1; i < n+1; i++) {
//         let str = '';
//         if(i % 3 === 0) str = str + 'fizz'
//         if(i % 5 === 0) str = str + 'buzz'
//         if(str === '') str = i;
//         console.log(str);
//     }
// }

function fizzBuzz(n) {
    for(let i = 1; i < n+1; i++) {
        if (i % 15 === 0) console.log('fizzbuzz')
        else if(i % 3 === 0) console.log('fizz')
        else if(i % 5 === 0) console.log('buzz')
        else console.log(i)
    }
}


module.exports = fizzBuzz;
