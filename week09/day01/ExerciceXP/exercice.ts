//exercise02:

// let age: number = 18;
// let Name: string = "Sara";
// console.log("Name", Name);
// console.log("age", age);

// //exercise03:
// let id: string | number;

// id = 101;
// console.log("ID as number:", id);

// id = "ABC123";
// console.log("ID as string:", id);





//exercise04:


// function checkNumber(num: number): string {
//   if (num > 0) {
//     return "Positive";
//   } else if (num < 0) {
//     return "Negative";
//   } else {
//     return "Zero";
//   }
// }

// // Test cases:
// console.log(checkNumber(10));  // Output: Positive
// console.log(checkNumber(-5));  // Output: Negative
// console.log(checkNumber(0));   // Output: Zero

//exercise05:
// function getDetails(name: string, age: number): [string, number, string] {
//   const message = `Hello, ${name}! You are ${age} years old.`;
//   return [name, age, message];
// }

// // Call the function
// const details = getDetails("Alice", 25);

// // Log the result
// console.log(details); 
// // Output: ['Alice', 25, 'Hello, Alice! You are 25 years old.']

//exercise06:
// // Step 1: Define the object type using an interface
// interface Person {
//   name: string;
//   age: number;
// }

// // Step 2: Create the function
// function createPerson(name: string, age: number): Person {
//   return {
//     name: name,
//     age: age
//   };
// }

// // Step 3: Test the function
// const person1 = createPerson("Alice", 25);
// console.log(person1); 
// Output: { name: 'Alice', age: 25 }


//exercise07:

// function updateUsernameField(): void {
//   const inputElement = document.getElementById("username") as HTMLInputElement;

//   if (inputElement) {
//     inputElement.value = "Hello, TypeScript!";
//   } else {
//     console.error("Element with ID 'username' not found.");
//   }
// }

// const button = document.getElementById("btn");
// if (button) {
//   button.addEventListener("click", updateUsernameField);
// }
//exercise08:
// function getAction(role: string): string {
//   switch (role) {
//     case "admin":
//       return "Manage users and settings";

//     case "editor":
//       return "Edit content";

//     case "viewer":
//       return "View content";

//     case "guest":
//       return "Limited access";

//     default:
//       return "Invalid role";
//   }
// }

// console.log(getAction("admin"));   // Output: Manage users and settings
// console.log(getAction("editor"));  // Output: Edit content
// console.log(getAction("viewer"));  // Output: View content
// console.log(getAction("guest"));   // Output: Limited access
// console.log(getAction("unknown")); // Output: Invalid role

//exercise09:
// Function overload signatures
function greet(): string;
function greet(name: string): string;

// Implementation
function greet(name: string = "guest"): string {
  return `Hello, ${name}!`;
}
console.log(greet());            // Output: Hello, guest!
console.log(greet("Alice"));     // Output: Hello, Alice!
console.log(greet("John"));      // Output: Hello, John!


