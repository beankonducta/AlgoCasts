// --- Directions
// Write a function that accepts an integer N
// and returns a NxN spiral matrix.
// --- Examples
//   matrix(2)
//     [[1, 2],
//     [4, 3]]
//   matrix(3)
//     [[1, 2, 3],
//     [8, 9, 4],
//     [7, 6, 5]]
//  matrix(4)
//     [[1,   2,  3, 4],
//     [12, 13, 14, 5],
//     [11, 16, 15, 6],
//     [10,  9,  8, 7]]

function matrix(n) {
    const matrix = new Array(n).fill(0).map(() => new Array(n).fill(0));
    let x = -1, y = 0, startRow = 0, endRow = n-1, startColumn = 0, endColumn = n-1, fill = 0;
    while (fill < n * n) {
        fill++;
        if(x < endColumn && y === startRow) {
            x ++;
            if(x === endColumn) startRow ++;
        }
        else if(x === endColumn && y < endRow) {
            y ++;
            if(y === endRow) endColumn --;
        }
        else if(y === endRow && x > startColumn) {
            x --;
            if(x === startColumn) endRow --;
        }
        else if(y > startRow && x === startColumn) {
            y --;
            if(y === startRow) startColumn --;
        }
        
        matrix[y][x] = fill;
    }
    return matrix;
}

module.exports = matrix;
