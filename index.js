const fs = require('fs');
const inquirer = require('inquirer');
let formatHtml = require('./lib/formatHtml.js');
const Engineer = require('./lib/engineer.js');
const Intern = require('./lib/intern');
const Manager = require('./lib/manager');

let team = [];

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
        .then((answer) => {
            const manager = new Manager(answer.name, answer.id, answer.email, answer.office)
            team.push(manager);

            createTeam();

        })
}
//asking if the manager wants to add another person to the team
function createTeam() {
    inquirer.prompt([
        {

            type: 'list',
            message: 'Who is on your team?',
            choices: ['Intern', 'Engineer', 'Done adding team members.'],
            name: 'role'

        }
    ])
        //questions for an engineer
        .then((answer) => {
            if (answer.role === 'Engineer') {
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
                        const engineer = new Engineer(answer.name, answer.id, answer.email, answer.github);
                        team.push(engineer);

                        createTeam();
                    })
            }
            //questions for an intern
            else if (answer.role === 'Intern') {
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
                        const intern = new Intern(answer.name, answer.id, answer.email, answer.school);
                        team.push(intern);
                    

                        createTeam();
                    })
            }
            //no more people being added to the team so the page is generated
            else if (answer.role === 'Done adding team members.') {
                return generateMarkDown();
            }
        })
    //formatting the html page
    function generateMarkDown() {
        formatHtml(team)
        fs.writeFile('worker.html', formatHtml(team), (err) => err ? console.log(err) : console.log('Successfully added to workers.html'));
    }
}

managerInfo();