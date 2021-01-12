// --- Directions
// Implement classes Node and Linked Lists
// See 'directions' document

class Node {
    constructor(data, next) {
        this.data = data;
        this.next = next;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
    }

    insertFirst(data) {
        this.head = new Node(data, this.head);
    }

    size() {
        let node = this.head;
        let count = 0;
        while (node) {
            count++;
            node = node.next;
        }
        return count;
    }

    getFirst() {
        return this.head;
    }

    getLast() {
        if (!this.head) return;
        let node = this.head;
        while (node.next) {
            node = node.next;
        }
        return node;
    }

    clear() {
        this.head = null;
    }

    removeFirst() {
        if (!this.head) return;
        this.head = this.head.next;
    }

    removeLast() {
        if (!this.head) return;
        if (!this.head.next) {
            this.head = null;
            return;
        }
        let node = this.head.next;
        let previous = this.head;

        while (node.next) {
            previous = node;
            node = node.next;
        }
        previous.next = null;
    }

    insertLast(data) {
        const last = this.getLast();
        if (last) last.next = new Node(data);
        else this.head = new Node(data);
    }

    getAt(slot) {
        if (!this.head) return null;
        let count = 0;
        let node = this.head;
        while (node) {
            if (count === slot) {
                return node;
            }
            node = node.next;
            count++;
        }
        return null;
    }

    removeAt(slot) {
        if (!this.head) return;
        if (slot === 0) {
            this.head = this.head.next;
            return;
        }
        const previous = this.getAt(slot - 1);
        if (!previous || !previous.next) return;
        previous.next = previous.next.next;
    }

    insertAt(data, slot) {
        // if index out of bounds, add to tail
        if (!this.head) {
            this.head = new Node(data);
            return;
        }

        if (slot === 0) {
            this.head = new Node(data, this.head);
            return;
        }

        //new node.next = previous.next, previous.next = new node
        const previous = this.getAt(slot - 1) || this.getLast();
        const node = new Node(data, previous.next);
        previous.next = node;
    }

    forEach(fn) {
        let node = this.head;
        while (node) {
            fn(node);
            node = node.next;
        }
    }

    *[Symbol.iterator] () {
        let node = this.head;
        while(node) {
            yield node;
            node = node.next;
        }
    }
}

module.exports = { Node, LinkedList };
