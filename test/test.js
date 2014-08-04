/*global describe, it */
'use strict';
var assert = require('assert');
var Stack = require('../src/stack-adt.js');

var stack = new Stack(3);

describe('stack operation test', function() {

    it('should create an empty stack in the beginning', function() {
        assert.throws(function() {
            stack.pop();
            throw new Error("Stack is empty");
        }, Error);
        assert.throws(function() {
            stack.peek();
            throw new Error("Stack is empty");
        }, Error);
        assert.equal(stack.size(), 0);
        assert.equal(stack.isEmpty(), true);
    });

    it('should be able to push elements to the stack', function() {
        stack.push(1);
        stack.push("bar");
        stack.push("foo");

        assert.equal(stack.peek(), "foo");
        assert.equal(stack.size(), 3);
        assert.equal(stack.isEmpty(), false);
    });

    it('should throw error when stack capacity is reached', function() {
        assert.throws(function() {
            stack.push("foo");
            throw new Error("Stack is full");
        }, Error);
        assert.equal(stack.peek(), "foo");
        assert.equal(stack.size(), 3);
        assert.equal(stack.isEmpty(), false);
    });

    it('should be able to pop element from the stack', function() {
        assert.equal(stack.pop(), "foo");
        assert.equal(stack.size(), 2);
        assert.equal(stack.isEmpty(), false);
    });

    it('should empty the entire stack', function() {
        assert.equal(stack.isEmpty(), false);
        assert.equal(stack.size(), 2);
        stack.empty();
        assert.equal(stack.isEmpty(), true);
        assert.equal(stack.size(), 0);
    });

    it('should iterate through the items without removing any item from the stack', function() {
        stack.push(3);
        stack.push(2);
        stack.push(1);

        var itr = stack.iterator,
            items = [1, 2, 3],
            index = 0;
        while (itr.hasNext()) {
            assert.equal(itr.next(), items[index++]);
        }
    });
});
