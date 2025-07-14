function validateUnionType(value: any, allowedTypes: string[]): boolean {
  const valueType = typeof value;

  for (const type of allowedTypes) {
    if (valueType === type) {
      return true;
    }
  }

  return false;
}

// Example variables
const username = "Alice";
const age = 30;
const isAdmin = true;
const items = [1, 2, 3];
const sayHi = () => "Hi";

// Test cases
console.log(validateUnionType(username, ["string", "number"]));       // true
console.log(validateUnionType(age, ["boolean"]));                 // false
console.log(validateUnionType(isAdmin, ["boolean"]));             // true
console.log(validateUnionType(items, ["object"]));                // true
console.log(validateUnionType(sayHi, ["function"]));              // true
console.log(validateUnionType(null, ["object"]));                 // true (typeof null is "object")
console.log(validateUnionType(undefined, ["undefined"]));         // true
