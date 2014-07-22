'use strict';

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
