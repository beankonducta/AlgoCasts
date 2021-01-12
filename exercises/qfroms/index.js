// --- Directions
// Implement a Queue datastructure using two stacks.
// *Do not* create an array inside of the 'Queue' class.
// Queue should implement the methods 'add', 'remove', and 'peek'.
// For a reminder on what each method does, look back
// at the Queue exercise.
// --- Examples
//     const q = new Queue();
//     q.add(1);
//     q.add(2);
//     q.peek();  // returns 1
//     q.remove(); // returns 1
//     q.remove(); // returns 2

const Stack = require('./stack');

class Queue {
    constructor() {
        this.stackOne = new Stack();
        this.stackTwo = new Stack();
    }

    add(val) {
        return this.stackOne.push(val);
    }

    remove() {
        while(this.stackOne.peek()) {
            this.stackTwo.push(this.stackOne.peek());
            this.stackOne.remove();
        }
        const remove = this.stackTwo.remove();
        while(this.stackOne.peek()) {
            this.stackOne.push(this.stackTwo.peek());
            this.stackTwo.remove();
        }
        return remove;
    }

    peek() {
        while(this.stackOne.peek()) {
            this.stackTwo.push(this.stackOne.peek());
            this.stackOne.remove();
        }
        const peek = this.stackTwo.peek();
        while(this.stackOne.peek()) {
            this.stackOne.push(this.stackTwo.peek());
            this.stackTwo.remove();
        }
        return peek;
    }
}

module.exports = Queue;
