const fs = require('fs');
const {Transform} = require('stream');
const readline = require ('readline');

const arr = ['89.123.1.41', '34.48.240.111']

const file = readline.createInterface({
    input: fs.createReadStream('./access.log', 'utf8'),
    output: process.stdout,
    terminal: false,
})

file.on('line', (line) => {
    arr.forEach(el => {
        if(line.indexOf(el) !== -1){
            fs.writeFile(`./${el}_requests.log`, '\n', { flag: 'a' }, (err) => console.log(err));
            fs.writeFile(`./${el}_requests.log`, line, { flag: 'a' }, (err) => console.log(err));
        }
    })
})
