// challenge.js
const greet = require('./greeting');
const showMessage = require('./colorful-message');
const readFileContent = require('./read-file.js'); // Note the underscore '_'

console.log(greet('Ali'));
showMessage();
readFileContent();