'use strict';

function Stack() {
    this.items = [];
}

Stack.prototype.push = function(item) {
    this.items.push(item);
};

Stack.prototype.pop = function() {
    return this.items.pop();
};

Stack.prototype.isEmpty = function() {
    return this.items.length === 0;
};

module.exports = Stack;
