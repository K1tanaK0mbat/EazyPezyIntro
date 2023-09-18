// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generate = require('./utils/generateMarkdown.js')
// TODO: Create an array of questions for user input
const questions = [
        "What should be the title of your project?",
        "Provide a description for your project:purpose,lesson,goal",
         "Provide Instructions for installation",
         "Explain how to use application",
        "Tell other users how to contribute to continued development",
        "Test Instructions",
        "What type of license for your project?",
];

const [title, description, installation, usage, contribution, test, license]= questions;

const choices= [
    "MIT",
    "GNU General Public License v3.0",
    "Apache License 2.0",
    "ISC",
    "GNU General Public License v2.0 ",
    "Creative Commons Zero v1.0 Uni",
    "Creative Commons Attribution 4.0 International",
    "SIL Open Font License 1.1",
    "CERN-OHL-P-2.0", 
    "CERN-OHL-W-2.0",
    "CERN-OHL-S-2.0",
    "The Unilicense",
    "Boost Software License 1.0",
    "Eclipse Public License 2.0",
    "Mozilla Public License 2.0",

]

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
{
    type:'list',
    name:'license',
    message:license,
    choices:choices,

},
])
.then((data) => {
    const README = generate(data);

    fs.writeFile('README.md', README, (err) =>
      err ? console.log(err) : console.log('Heres Your New README')
    );
})};

// Function call to initialize app
init();