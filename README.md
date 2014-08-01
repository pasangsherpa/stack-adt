# stack-adt [![Build Status](https://travis-ci.org/pasangsherpa/stack-adt.svg?branch=master)](https://travis-ci.org/pasangsherpa/stack-adt)

> Stack ADT for browser and nodejs


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

stack.push(1);
stack.peek();
stack.isEmpty();
stack.size();
stack.pop();
stack.size();
```


## Documentation

### Stack()

Creates an empty stack using the default capacity.

### Stack(initialCapacity)

Creates an empty stack using the specified capacity.

#### initialCapacity

Type: `int`

initialCapacity represents the specified capacity.


### Methods

#### .push(element)

Adds one element to the top of the stack.

##### element

Type: `object`

the element to be pushed onto stack.

#### .pop()

Removes and returns the top element from the stack.

Type: `object`

the element removed from the top of the stack.

#### .peek()

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


## License

[MIT](http://opensource.org/licenses/MIT) © [Pasang Sherpa](https://github.com/pasangsherpa)
