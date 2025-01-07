const fs = require('fs');

// read file returns either error or the content of the file but not both
fs.readFile('food.txt', 'utf8', (err, fileContents) => {
    if (err) {
        console.log(err);
    }
    else {
         // once callback executes (when file read is done), display contents
        console.log(fileContents);
    }   
});

console.log('We ate this');

fs.readFile('drinks.txt', 'utf8', (err, fileContents) => {
    // once callback executes (when file read is done), display contents
    console.log(fileContents);
});

console.log('We drank this');