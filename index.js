const fs = require('fs');
const inquirer = require('inquirer');
let formatHtml = require('./formatHtml.js');

// let markDown = require('./generateMarkDown.js');
//asks for the mangers information
function managerInfo() {
    return inquirer.prompt([
        {
            type: 'input',
            message: 'Who is the team meanger?',
            name: 'name'
        },
        {
            type: 'input',
            message: 'What is the managers employee number?',
            name: 'id'
        },
        {
            type: 'input',
            message: 'What is their email?',
            name: 'email'
        },
        {
            type: 'input',
            message: 'What is their office number?',
            name: 'office'
        },
    ])
    .then ((answer) => {
        const manager = new Manager(answer)
        
    })
}
//asking if the manager wants to add another person to the team
function nextEmployee() {
    inquirer.prompt([
        {

            type: 'list',
            message: 'Who is on your team?',
            choices: ['Intern', 'Engineer', 'We already have the dream team!'],
            name: 'nextEmployee'

        }
    ])
        //questions for an engineer
        .then((answer) => {
            if (answer.nextEmployee === 'Engineer') {
                return inquirer.prompt([
                    {
                        type: 'input',
                        message: 'Enter name of engineer.',
                        name: 'name'
                    },
                    {
                        type: 'input',
                        message: 'What is their employee ID?',
                        name: 'id'
                    },
                    {
                        type: 'input',
                        message: 'Enter engineer email.',
                        name: 'email'
                    },
                    {
                        type: 'input',
                        message: 'What is the engineer GitHub URL?',
                        name: 'github'
                    }
                ])
                    .then((answer) => {
                        var format = formatHtml(answer);
                        fs.appendFile('workers.html', format, (err) => err ? console.log(err) : console.log('Successfully added to workers.html'))

                        nextEmployee();
                    })
            }
            //questions for an intern
            else if (answer.nextEmployee === 'Intern') {
                return inquirer.prompt([
                    {
                        type: 'input',
                        message: 'Enter name of employee.',
                        name: 'name'
                    },
                    {
                        type: 'input',
                        message: 'What is their employee ID?',
                        name: 'id'
                    },
                    {
                        type: 'input',
                        message: 'Enter employee email.',
                        name: 'email'
                    },
                    {
                        type: 'input',
                        message: 'What school does the intern attend?',
                        name: 'school'
                    }
                ])
                    .then((answer) => {
                        var format = formatHtml(answer);
                        fs.appendFile('workers.html', format, (err) => err ? console.log(err) : console.log('Successfully added to workers.html'))

                        nextEmployee();
                    })
            }
            //no more people being added to the team so the page is generated
            else if (answer.nextEmployee === 'We already have the dream team!') {
                return generateMarkDown;
            }
        })
    //formatting the html page
    function generateMarkDown() {
        var format = formatHtml();
        return `
        ${format}
        `
    }
}
