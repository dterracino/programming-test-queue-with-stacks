'use strict';

// This is a simple queue implementation. I chose to implement this in a way where dequeuing the
// queue allways takes longer time than enqueing it.
//
// Other ways I could do this would be to share the load between enqueue and dequeue and just not reverse
// the queue before and after removeing an item to the queue, and check if the "enqueue-queue" or the
// "dequeue-queue" is currently populated.



var Stack = require('./stack.js');

function Queue() {
    this.mainQueue = new Stack();
    this.tmpQueue = new Stack();
}

Queue.prototype.enqueue = function(item) {
    this.mainQueue.push(item);
};


Queue.prototype.dequeue = function() {
    var out;
    while (!this.mainQueue.isEmpty()) {
        this.tmpQueue.push(this.mainQueue.pop());
    }

    out = this.tmpQueue.pop();

    while (!this.tmpQueue.isEmpty()) {
        this.mainQueue.push(this.tmpQueue.pop());
    }

    return out;
};

Queue.prototype.isEmpty = function() {
    return this.mainQueue.isEmpty();
};


module.exports = Queue;
