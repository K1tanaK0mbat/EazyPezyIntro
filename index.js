// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
//const generate = require('./utils/generateMarkdown.js')
// TODO: Create an array of questions for user input
const questions = [
        "What should be the title of your project?",
        "Provide a description for your project:purpose,lesson,goal",
         "Provide Instructions for installation",
         "Explain how to use application",
        "Tell other users how to contribute to continued development",
        "Test Instructions"
];

const [title, description, installation, usage, contribution, test]=questions;


// TODO: Create a function to initialize app
function init() 
{inquirer
.prompt([
{
    type:'input',
    name:'title',
    message:title,
},
{
    type:'input',
    name:'describe',
    message:description,
},
{
    type:'input',
    name:'install',
    message:installation,
},
{
    type:'input',
    name:'usage',
    message:usage,
},
{
    type:'input',
    name:'contribute',
    message:contribution,
},
{
    type:'input',
    name:'test',
    message:test,
},
])
};

// Function call to initialize app
init();