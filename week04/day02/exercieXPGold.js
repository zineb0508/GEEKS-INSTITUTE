
//exercice01:
const price = [5, 8, 37, 92, 17];

const sum = price.reduce((accumulator, currentValue) => accumulator + currentValue, 0);

console.log("The sum of all elements is:", sum);

//exercice02:
const numbers = [1, 2, 3, 3, 4, 5, 5];


const uniqueNumbers = [...new Set(numbers)];

console.log("Array without duplicates:", uniqueNumbers);

//exercice04:
function repeatText(str, n) {
  if (n === undefined) n = 1;
  let result = '';
  for (let i = 0; i < n; i++) {
    result += str;
  }
  return result;
}


console.log(repeatText('Ha!', 3)); // Output: "Ha!Ha!Ha!"
//exercice05:
const startLine = '     ||<- Start line';
let turtle = '🐢';
let rabbit = '🐇';

console.log(startLine);
console.log('       ' + turtle);
console.log('       ' + rabbit);

turtle = turtle.trim().padEnd(9, '=');
console.log('\n' + turtle);
