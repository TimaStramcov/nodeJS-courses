const fs = require('fs');
const {Transform} = require('stream');
const readline = require ('readline');
const path = require('path');
const inquirer = require('inquirer');

const arr = ['89.123.1.41', '34.48.240.111']
const encodeArr = ['utf-8', 'other']

const executionDir = process.cwd();

inquirer.prompt([
    {
        name: 'pathName',
        type: 'input',
        message: 'Выберите путь',
    },
    {
        name: 'encode',
        type: 'list',
        message: 'Выберите кодировку',
        choices: encodeArr,
    },
    {
        name: 'elements',
        type: 'checkbox',
        message: 'Выберите сортировку',
        choices: arr,
    },
]).then(({ pathName, encode, elements }) => {
    const fullPath = path.join(executionDir, pathName);
    const file = readline.createInterface({
        input: fs.createReadStream(fullPath, encode),
        output: process.stdout,
        terminal: false,
    })

    file.on('line', (line) => {
        elements.forEach(el => {
            if(line.indexOf(el) !== -1){
                fs.writeFile(`./${el}_requests.log`, '\n', { flag: 'a' }, (err) => console.log(err));
                fs.writeFile(`./${el}_requests.log`, line, { flag: 'a' }, (err) => console.log(err));
            }
        })
    })
});
