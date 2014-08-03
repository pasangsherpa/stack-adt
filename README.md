# stack-adt [![Build Status](https://travis-ci.org/pasangsherpa/stack-adt.svg?branch=master)](https://travis-ci.org/pasangsherpa/stack-adt)

> Stack ADT for browser and nodejs

The **Stack** class represents a last-in-first-out (LIFO) stack of generic items. It supports the usual *push* and *pop* operations, along with methods for peeking at the top item, testing if the stack is empty, and iterating through the items in LIFO order.

All stack operations except iteration are constant time.


## Install

Download the [production version][min] or the [development version][max].

[min]: https://raw.githubusercontent.com/pasangsherpa/stack-adt/master/dist/stack-adt.min.js
[max]: https://raw.githubusercontent.com/pasangsherpa/stack-adt/master/dist/stack-adt.js

```sh
$ npm install --save stack-adt
```

```sh
$ bower install --save stack-adt
```


## Usage

```js
var Stack = require('stack-adt');
var stack = new Stack();

stack.push(10);
stack.peek();
stack.isEmpty();
stack.push("foo");
stack.push({hello: "world"});
stack.peek().hello; // Outputs "world"
stack.push(function(){ console.log("hello") });
stack.peek()(); // Outputs "world"
stack.size();
stack.pop();
stack.size();

var itr = stack.iterator

while(itr.hasNext()) {
  console.log(itr.next());
}

```
```js
<script type="text/javascript" src="https://raw.githubusercontent.com/pasangsherpa/stack-adt/master/dist/stack-adt.min.js"></script>
<script type="text/javascript"> 
  var stack = new Stack();

  stack.push(10);
  stack.peek();
  stack.isEmpty();
  stack.push("foo");
  stack.push({hello: "world"});
  stack.peek().hello; // Outputs "world"
  stack.push(function(){ console.log("hello") });
  stack.peek()(); // Outputs "world"
  stack.size();
  stack.pop();
  stack.size();

  var itr = stack.iterator

  while(itr.hasNext()) {
    console.log(itr.next());
  }
</script>
```


## Documentation

### Stack()

Creates an empty stack with infinite capacity.

### Stack(initialCapacity)

Creates an empty stack using the specified capacity.

#### initialCapacity

Type: `int`

initialCapacity represents the specified capacity.


### Methods

#### .push(element) `throws "Stack is full" error`

Adds one element to the top of the stack and returns the new size of the stack.

##### element

Type: `object`

the element to be pushed onto stack.

#### .pop() `throws "Stack is empty" error` 

Removes and returns the top element from the stack.

Type: `object`

the element removed from the top of the stack.

#### .peek() `throws "Stack is empty" error` 

Returns without removing the top element of the stack.

Type: `object`

the element on top of the stack.

#### .isEmpty()

Returns true if this stack contains no elements.

Type: `boolean`

whether or not the stack is empty.

#### .size()

Returns the number of elements in the stack.

Type: `int`

the number of element in the stack.

#### .iterator

Returns an iterator to the stack that iterates through the items in LIFO order.

Type: `object`

the iterator object of the stack

#### .iterator.next() `throws "No such element" error` 

Returns the next item in LIFO order.

#### .iterator.hasNext()

Returns whether the stack has next item in LIFO order.


## License

[MIT](http://opensource.org/licenses/MIT) © [Pasang Sherpa](https://github.com/pasangsherpa)
