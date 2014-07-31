/*!
* stack-adt
* v0.1.0 - 2014-07-31
* https://github.com/pasangsherpa/stack-adt
* (c) Pasang Sherpa <pgyalzen@gmail.com> (https://github.com/pasangsherpa)
* MIT License
*/
(function() {
    'use strict';
    var Stack = {};

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
