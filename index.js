// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const GenerateMkd = require("./utils/generateMarkdown.js");

// TODO: Create an array of questions for user input
const questions = 
[
{    
    type: "input",
    name: "github",
    message: "Please provide your GitHub username.",
},
{
    type: "input",
    name: "email",
    message: "Please provide your email address.",
},
{
    type: "input",
    name: "title",
    message: "Please give the title of your project?",
},
{
    type: "input",
    name: "description",
    message: "Please provide a meaningful description of your project.",
},
{
    type: "input",
    name: "installation",
    message: "Please provide installation instructions for your project.",
},
{
    type: "input",
    name: "usage",
    message: "Please provide usage information for your project.",
},
{
    type: "input",
    name: "contribution",
    message: "Please provide contribution guidelines for your project.",
},
{
    type: "list",
    name: "license",
    message: "Please select a license for your project.",
    choices: ["Apache", "GPL", "MIT", "None"],
},{
    type: "input",
    name: "test",
    message: "Please provide test cases for your project.",
},
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) 
{
    if (!fs.existsSync("./output")) {
        fs.mkdirSync("./output");
    }
    fs.writeFile(`./output/${fileName}`, data, (err) => {
        if (err) throw err;
        console.log("README file created successfully!");
    });
}

// TODO: Create a function to initialize app
function init() 
{ 
inquirer.prompt(questions).then((answers) => {
const readme = GenerateMkd.generateMarkdown(answers);
writeToFile("README.md", readme);
});}

// Function call to initialize app
init();
