const inquirer = require('inquirer');
const fs = require('fs');
const { Circle, Square, Triangle } = require('./lib/shapes');

function init() {
    inquirer
        .prompt([
            {
                type: 'input',
                message: 'What letters would you like to use?',
                name: 'userLetters',
            },
            {
                type: 'input',
                message: 'What color do you want your letters to be?',
                name: 'textColor',
            },
            {
                type: 'list',
                message: 'What shape would you like?',
                choices: ['Circle', 'Square', 'Triangle'],
                name: 'userShape',
            },
            {
                type: 'input',
                message: 'What color would you like the shape to be?',
                name: 'shapeColor',
            }


        ]).then(function (results) {
            // .then( (results) => {})
            console.log(results.contact)
            let shape;
            if(results.userShape === 'Circle') {
                shape = new Circle (results.userLetters, results.textColor, results.shapeColor)
                console.log(shape);
            };

            if(results.userShape === 'Square') {
                shape = new Square (results.userLetters, results.textColor, results.shapeColor)
                console.log(shape);
            };

            if(results.userShape === 'Triangle') {
                shape = new Triangle (results.userLetters, results.textColor, results.shapeColor)
                console.log(shape);
            }
            const logo = shape.render()
            console.log(logo);
        });
}

init();