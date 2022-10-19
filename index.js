const fs = require('fs');
const inquirer = require('inquirer');
const formatHtml = require('./formatHtml.js');

// let markDown = require('./generateMarkDown.js');
//when application starts first you are asked about manager information
//need to set a time delay on other employee questions based on user choice
function managerInfo() {
    return inquirer.prompt([
        {
            type: 'input',
            message: 'Who is the team meanger?',
            name: 'manager'
        },
        {
            type: 'input',
            message: 'What is the managers employee number?',
            name: 'employeeNumber'
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
}
function nextEmployee() {
    inquirer.prompt([
        {

            type: 'list',
            message: 'Who is on your team?',
            choices: ['Intern', 'Engineer', 'We already have the dream team!'],
            name: 'nextEmployee'

        }
    ])
    .then((answer) => {
            if (answer.nextEmployee === 'Engineer') {
                return inquirer.prompt([
                    {
                        type: 'input',
                        message: 'Enter name of engineer.',
                        name: 'engineer'
                    },
                    {
                        type: 'input',
                        message: 'What is their employee ID?',
                        name: 'engineerNumber'
                    },
                    {
                        type: 'input',
                        message: 'Enter engineer email.',
                        name: 'engineerMail'
                    },
                    {
                        type: 'input',
                        message: 'What is the engineer GitHub URL?',
                        name: 'engineerGitHub'
                    }
                ])
                    .then((answer) => {

                        nextEmployee();
                    })
            }
            else if (answer.nextEmployee === 'Intern') {
                return inquirer.prompt([
                    {
                        type: 'input',
                        message: 'Enter name of employee.',
                        name: 'intern'
                    },
                    {
                        type: 'input',
                        message: 'What is their employee ID?',
                        name: 'internNumber'
                    },
                    {
                        type: 'input',
                        message: 'Enter employee email.',
                        name: 'internMail'
                    },
                    {
                        type: 'input',
                        message: 'What school does the intern attend?',
                        name: 'internSchool'
                    }
                ])
                    .then((answer) => {

                        nextEmployee();
                    })
            }
            else if (answer.nextEmployee === 'We already have the dream team!') {
                return generateMarkDown;
            }
        })

    function generateMarkDown() {
        var format = formatHtml();
        return `
        ${format}
        `
    }
}

