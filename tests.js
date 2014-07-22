/*global describe, it, before, beforeEach */

'use strict';

var expect = require('chai').expect,
    Stack = require('./stack.js'),
    Queue = require('./queue.js');

describe('Queue', function() {
    var queue;

    before(function() {
        queue = new Queue();
    });

    it('should create an empty queue', function() {
        expect(queue.isEmpty()).to.be.true;
    });

    it('should return false if queue is not empty', function() {
        queue.enqueue(1);
        expect(queue.isEmpty()).to.be.false;
    });

    describe('FIFO properties', function() {
        beforeEach(function() {
            queue = new Queue();
        });

        it('should be able to enqueue an item', function() {
            queue.enqueue(1);
            expect(queue.isEmpty()).to.be.false;
        });

        it('should be able to dequeue an item', function() {
            queue.enqueue(1);
            queue.enqueue(2);
            expect(queue.dequeue()).to.equal(1);
            expect(queue.dequeue()).to.equal(2);
        });
    });
});


describe('Stack', function() {
    var stack;

    before(function() {
        stack = new Stack();
    });

    it('should initially be empty', function() {
        expect(stack.isEmpty()).to.be.true;
    });

    it('should return false if stack is not empty', function() {
        stack.push(1);
        expect(stack.isEmpty()).to.be.false;
    });

    describe('LIFO properties', function() {
        beforeEach(function() {
            stack = new Stack();
        });

        it('should be able to push an item to the stack', function() {
            var testVal = 1;
            stack.push(testVal);
            expect(stack.items[0]).to.equal(testVal);
        });

        it('should pop in a LIFO matter', function() {
            stack.push(1);
            stack.push(2);
            expect(stack.pop()).to.equal(2);
            expect(stack.pop()).to.equal(1);
        });
    });

});

