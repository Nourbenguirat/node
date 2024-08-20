const fs = require('fs');

const fileName = 'welcome.txt';
const content = 'hello node';

// Write to the file
fs.writeFile(fileName, content, (err) => {
    if (err) {
        console.error('Error writing to file:', err);
    } else {
        console.log('Content written to file successfully');
    }
});


fs.readFile(fileName, (err,data) => {
    if (err) {
        console.error('Error reading to file:', err);
    } else if(data) {
        console.log("" , data);
        const str = data.toString()
        console.log(str);
    }
});