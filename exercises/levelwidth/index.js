// --- Directions
// Given the root node of a tree, return
// an array where each element is the width
// of the tree at each level.
// --- Example
// Given:
//     0
//   / |  \
// 1   2   3
// |       |
// 4       5
// Answer: [1, 3, 2]

function levelWidth(root) {
    const arr = [root, 's'];
    const arr2 = [0];
    while (arr.length > 1) {
        const node = arr.shift();
        if (node === 's') {
            arr2.push(0);
            arr.push('s');
        } else {
            arr.push(...node.children);
            arr2[arr2.length - 1]++;
        }
    }
    return arr2;
}

module.exports = levelWidth;
