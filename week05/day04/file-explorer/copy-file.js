
const fs = require('fs');

fs.readFile('source.txt', 'utf-8', (err, data) => {
  if (err) {
    console.error(' Failed to read source.txt:', err);
    return;
  }

  fs.writeFile('destination.txt', data, (err) => {
    if (err) {
      console.error(' Failed to write destination.txt:', err);
      return;
    }

    console.log(' File copied successfully to destination.txt');
  });
});
