// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generate = require('./utils/generateMarkdown.js')
// TODO: Create an array of questions for user input
const questions = [
    {
        title:"What should be the title of your project?",
        Description:"Provide a description for your project:purpose,lesson,goal",
        Installation: "Provide Instructions for installation",
        Usage: "Explain how to use application",
        Contributing:"Tell other users how to contribute to continued development",
        Tests:"Test Instructions"
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();