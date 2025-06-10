const _ = require('lodash');

const math = require('./math');

const nums = [1,2,3,4];
const doubled = _.map(nums, n => n * 2);
console.log("Doubled:", doubled);

console.log("Add", math.add(5,3));
console.log("Multiply", math.multiply(5,3));