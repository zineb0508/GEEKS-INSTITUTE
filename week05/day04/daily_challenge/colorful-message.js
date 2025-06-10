
const chalk = require('chalk');

const message = chalk.blue.bold('hello me !!') +
                '\n' +
                chalk.red.bgYellow('welcome! to Node.js with chalk ');

console.log(message);