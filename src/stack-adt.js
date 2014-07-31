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
