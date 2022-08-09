// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'Enter the title of your project. (Required)',
        validate: titleInput => {
          if (titleInput) {
            return true;
          } else {
            console.log('You need to enter the title of your project!');
            return false;
          }
        }
      },
      {
        type: 'input',
        name: 'description',
        message: 'Enter a description of your project. (Required)',
        validate: descriptionInput => {
          if (descriptionInput) {
            return true;
          } else {
            console.log('You need to enter a description of your project!');
            return false;
          }
        }
      },
      {
        type: 'input',
        name: 'install',
        message: 'Enter the installation directions for your project. (Required)',
        validate: titleInput => {
          if (titleInput) {
            return true;
          } else {
            console.log('You need to enter the installation directions for your project!');
            return false;
          }
        }
      },
      {
        type: 'input',
        name: 'usage',
        message: 'Enter the usage information for your project. (Required)',
        validate: usageInput => {
          if (usageInput) {
            return true;
          } else {
            console.log('You need to enter the usage information for your project!');
            return false;
          }
        }
      },
      {
        type: 'list',
        name: 'license',
        message: 'Choose the license you used for your project',
        choices: ['MIT', 'GNU GPLv3', 'Mozilla', 'Apache', 'Boost']
      },
      {
        type: 'input',
        name: 'contribute',
        message: 'Enter the contribution guidelines for this project. (Required)',
        validate: contributeInput => {
          if (contributeInput) {
            return true;
          } else {
            console.log('You need to enter the contibution guidelines for this project!');
            return false;
          }
        }
      },
      {
        type: 'input',
        name: 'test',
        message: 'Enter the test instructions for this project. (Required)',
        validate: testInput => {
          if (testInput) {
            return true;
          } else {
            console.log('You need to enter the test instructions for this project!');
            return false;
          }
        }
      },
      {
        type: 'input',
        name: 'username',
        message: 'Enter your Github username. (Required)',
        validate: usernameInput => {
          if (usernameInput) {
            return true;
          } else {
            console.log('You need to enter your Github username!');
            return false;
          }
        }
      },
      {
        type: 'input',
        name: 'email',
        message: 'Enter your email address. (Required)',
        validate: emailInput => {
          if (emailInput) {
            return true;
          } else {
            console.log('You need to enter your email address!');
            return false;
          }
        }
      },
      {
        type: 'input',
        name: 'deployed',
        message: 'Enter the URL for the deployed project. (Required)',
        validate: deployedInput => {
          if (deployedInput) {
            return true;
          } else {
            console.log('You need to enter the URL for the deployed project!');
            return false;
          }
        }
      },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
