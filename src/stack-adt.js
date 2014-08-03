(function() {
    'use strict';
    var Stack = function(initialCapacity) {
        var _initialCapacity = initialCapacity || Infinity;
        var _elements = [];

        function push(element) {
            if (size() === _initialCapacity) {
                throw new Error('push(): Stack is full.');
            }
            return _elements.push(element);
        }

        function pop() {
            if (isEmpty()) {
                throw new Error('pop(): Stack is empty.');
            }
            return _elements.pop();
        }

        function peek() {
            if (isEmpty()) {
                throw new Error('peek(): Stack is empty.');
            }
            return _elements[_elements.length - 1];
        }

        function isEmpty() {
            return size() === 0;
        }

        function size() {
            return _elements.length;
        }

        function Iterator() {
            var counter = 0;

            function hasNext() {
                return _elements.length - counter > 0;
            }

            function next() {
                if (!hasNext()) {
                    throw new Error('next(): No such element.');
                }
                counter++;
                return _elements[_elements.length - counter];
            }
            return {
                hasNext: hasNext,
                next: next
            }
        }

        return {
            push: push,
            pop: pop,
            peek: peek,
            isEmpty: isEmpty,
            size: size,
            iterator: new Iterator()
        };
    };

    if (typeof define === 'function' && define.amd) {
        define(function() {
            return Stack;
        });
    } else if (typeof module !== 'undefined' && module.exports) {
        module.exports = Stack;
    } else {
        window.Stack = Stack;
    }
})();
