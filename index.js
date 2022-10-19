const fs = require('fs');
const inquirer = require('inquirer');


// let markDown = require('./generateMarkDown.js');
//when application starts first you are asked about manager information
//need to set a time delay on other employee questions based on user choice
inquirer
    .prompt([
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
    .then((answer) => {
     let mark = formatHtml(answer);
    //  console.log(mark);
    fs.writeFile('workers.html', mark, (err) =>
    err ? console.log(err) : console.log('Successfully created workers.html')
    )})
    
    //look up card columns in bootstrap
    const formatHtml = ({ manager, employeeNumber, email, office }) => {
        return `
        <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta http-equiv="X-UA-Compatible" content="ie=edge">
      <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@3.3.7/dist/css/bootstrap.min.css" integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossorigin="anonymous">
      <title>Office Team</title>
    </head>
    <body>
    <section class="card">
    <div>
    <h1> ${manager} </h1>
    <div> 👔Manager </div>
    <div>ID: ${employeeNumber}</div>
    <div href='#' class="card-link">Email: ${email}</div>
    <div>Office: ${office}</div>
    </div>
    </section>

    </body>
        `
    }
    
    function generateMarkDown() {
        var format = formatHtml();
        return `
        ${format}
        `
    }

    inquirer
        .prompt([
            {
                type: 'list',
                message: 'Who is on your team?',
                choices: ['Intern', 'Engineer', 'We already have the dream team!']
            }
        ])
        .then((answer) => {
            //go to the function with the questions corresponding to the users answer
            console.log(answer);
        })
// //for engineer
// inquirer
//     .prompt = ([
//         {
//             type: 'input',
//             message: 'Enter name of employee.',
//             name: 'engineer'
//         },
//         {
//             type: 'input',
//             message: 'Enter employee job title.',
//             name: 'employeeTitle'
//         },
//         {
//             type: 'input',
//             message: 'What is their employee ID?',
//             name: 'employeeNumber'
//         },
//         {
//             type: 'input',
//             message: 'Enter employee's email.',
//             name: 'employeeMail'
//         },
//         {
    //         type: 'input',
    //         message: 'What is the engineer's GitHub URL?',
    //         name: 'employeeGitHub'
    //      }
//     ])
//     .then(answer) => {
//         fs.appendFile('workers.html', mark, (err) =>
//     err ? console.log(err) : console.log('Successfully added to workers.html')
//      return
//     }
// //for intern
// inquirer
//     .prompt = ([

//     ])


