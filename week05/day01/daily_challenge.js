/*function makeAllCaps(words) {
  return new Promise((resolve, reject) => {
    // Check if every item is a string
    if (words.every(word => typeof word === 'string')) {
      // Convert each word to uppercase
      const upperCased = words.map(word => word.toUpperCase());
      resolve(upperCased);
    } else {
      reject('Not all items are strings');
    }
  });

function sortWords(words) {
  return new Promise((resolve, reject) => {
    // Check if array has more than 4 elements
    if (words.length > 4) {
      // Sort the array alphabetically
      const sorted = words.sort();
      resolve(sorted);
    } else {
      reject('The array has 4 or fewer words');
    }
  });
}
makeAllCaps([1, "pear", "banana"])
      .then((arr) => sortWords(arr))
      .then((result) => console.log(result))
      .catch(error => console.log(error))

//in this example, the catch method is executed
makeAllCaps(["apple", "pear", "banana"])
      .then((arr) => sortWords(arr))
      .then((result) => console.log(result))
      .catch(error => console.log(error))

//in this example, you should see in the console, 
// the array of words uppercased and sorted
makeAllCaps(["apple", "pear", "banana", "melon", "kiwi"])
      .then((arr) => sortWords(arr))
      .then((result) => console.log(result)) //["APPLE","BANANA", "KIWI", "MELON", "PEAR"]
      .catch(error => console.log(error))*/

//second daily  challenge :
const morse = `{
  "0": "-----",
  "1": ".----",
  "2": "..---",
  "3": "...--",
  "4": "....-",
  "5": ".....",
  "6": "-....",
  "7": "--...",
  "8": "---..",
  "9": "----.",
  "a": ".-",
  "b": "-...",
  "c": "-.-.",
  "d": "-..",
  "e": ".",
  "f": "..-.",
  "g": "--.",
  "h": "....",
  "i": "..",
  "j": ".---",
  "k": "-.-",
  "l": ".-..",
  "m": "--",
  "n": "-.",
  "o": "---",
  "p": ".--.",
  "q": "--.-",
  "r": ".-.",
  "s": "...",
  "t": "-",
  "u": "..-",
  "v": "...-",
  "w": ".--",
  "x": "-..-",
  "y": "-.--",
  "z": "--..",
  ".": ".-.-.-",
  ",": "--..--",
  "?": "..--..",
  "!": "-.-.--",
  "-": "-....-",
  "/": "-..-.",
  "@": ".--.-.",
  "(": "-.--.",
  ")": "-.--.-"
}`;

// Function 1: toJs()
function toJs() {
  return new Promise((resolve, reject) => {
    try {
      const morseObject = JSON.parse(morse);
      if (Object.keys(morseObject).length === 0) {
        reject("Morse object is empty");
      } else {
        resolve(morseObject);
      }
    } catch (error) {
      reject("Invalid JSON format");
    }
  });
}

// Function 2: toMorse(morseJS)
function toMorse(morseJS) {
  return new Promise((resolve, reject) => {
    const userInput = prompt("Enter a word or sentence to translate to Morse code:");

    if (!userInput) {
      reject("No input provided");
      return;
    }

    const lowerCaseInput = userInput.toLowerCase();
    const morseTranslation = [];

    for (let char of lowerCaseInput) {
      if (morseJS[char]) {
        morseTranslation.push(morseJS[char]);
      } else {
        reject(`Character "${char}" does not exist in Morse dictionary.`);
        return;
      }
    }

    resolve(morseTranslation);
  });
}

// Function 3: joinWords(morseTranslation)
function joinWords(morseTranslation) {
  const outputDiv = document.getElementById("morse-output");
  outputDiv.textContent = morseTranslation.join("\n");
}


function run() {
  toJs()
    .then(morseJS => toMorse(morseJS))
    .then(morseTranslation => joinWords(morseTranslation))
    .catch(error => {
      alert(error);
    });
}