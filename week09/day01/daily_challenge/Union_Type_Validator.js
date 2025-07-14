function validateUnionType(value, allowedTypes) {
    var valueType = typeof value;
    for (var _i = 0, allowedTypes_1 = allowedTypes; _i < allowedTypes_1.length; _i++) {
        var type = allowedTypes_1[_i];
        if (valueType === type) {
            return true;
        }
    }
    return false;
}
// Example variables
var username = "Alice";
var age = 30;
var isAdmin = true;
var items = [1, 2, 3];
var sayHi = function () { return "Hi"; };
// Test cases
console.log(validateUnionType(username, ["string", "number"])); // true
console.log(validateUnionType(age, ["boolean"])); // false
console.log(validateUnionType(isAdmin, ["boolean"])); // true
console.log(validateUnionType(items, ["object"])); // true
console.log(validateUnionType(sayHi, ["function"])); // true
console.log(validateUnionType(null, ["object"])); // true (typeof null is "object")
console.log(validateUnionType(undefined, ["undefined"])); // true
