//exercise04:
// Implementation
function greet(name) {
    if (name === void 0) { name = "guest"; }
    return "Hello, ".concat(name, "!");
}
console.log(greet()); // Output: Hello, guest!
console.log(greet("Alice")); // Output: Hello, Alice!
console.log(greet("John")); // Output: Hello, John!
