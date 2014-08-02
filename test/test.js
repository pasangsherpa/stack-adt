/*global describe, it */
'use strict';
var assert = require('assert');
var Stack = require('../src/stack-adt.js');

var stack = new Stack(1);

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

    it('should have size 1 when an element is pushed to the stack', function() {
        stack.push("foo");
        assert.equal(stack.peek(), "foo");
        assert.equal(stack.size(), 1);
        assert.equal(stack.isEmpty(), false);
    });

    it('should throw error when stack capacity is reached', function() {
        assert.throws(function() {
            stack.push("foo");
            throw new Error("Stack is full");
        }, Error);
        assert.equal(stack.peek(), "foo");
        assert.equal(stack.size(), 1);
        assert.equal(stack.isEmpty(), false);
    });

    it('should have size 0 when an element is poped from the stack', function() {
        assert.equal(stack.pop(), "foo");
        assert.equal(stack.size(), 0);
        assert.equal(stack.isEmpty(), true);
    });

});
