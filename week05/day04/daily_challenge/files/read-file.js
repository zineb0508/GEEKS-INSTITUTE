// read-file.js
const fs = require('fs');
const path = require('path');

function readFileContent() {
    const filePath = path.join(__dirname, 'files', 'file_data.txt');

    fs.readFile(filePath, 'utf8', (err, data) => {
        if (err) {
            console.error('Error reading file:', err);
            return;
        }

        console.log('File Content:');
        console.log(data);
    });
}

module.exports = readFileContent;