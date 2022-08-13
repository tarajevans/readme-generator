// TODO: Include packages needed for this application
const fs = require("fs");
const inquirer = require('inquirer');
let badgeUrl;
let licenseText;
//const { writeFile, copyFile } = require('./utils/generate-site');
const writeMarkdown = (dataObj, badgeUrl) => {
  return`
# ${dataObj.title}
![License Badge](${badgeUrl})
## Description
${dataObj.description}
## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)
## Installation
${dataObj.install}
## Usage
${dataObj.usage}
## License
${dataObj.license}

${licenseText}
## Contributing
${dataObj.contribute}
## Tests
${dataObj.test}
## Questions
The link to my Github profile is:
[${dataObj.username}]("https://github.com/${dataObj.username}")

For any questions or comments please email me:
${dataObj.email}
`;}
function selectBadge(badgeChoice) {
  switch(badgeChoice) {
    case "MIT":
      licenseText="A short and simple permissive license with conditions only requiring preservation of copyright and license notices. Licensed works, modifications, and larger works may be distributed under different terms and without source code."
      badgeUrl= "https://img.shields.io/badge/license-MIT-blue";
      break;
      case "GPLv3":
        licenseText="Permissions of this strong copyleft license are conditioned on making available complete source code of licensed works and modifications, which include larger works using a licensed work, under the same license. Copyright and license notices must be preserved. Contributors provide an express grant of patent rights."
        badgeUrl= "https://img.shields.io/badge/license-GPLv3-green";
        break;
        case "Mozilla":
          licenseText="Permissions of this weak copyleft license are conditioned on making available source code of licensed files and modifications of those files under the same license (or in certain cases, one of the GNU licenses). Copyright and license notices must be preserved. Contributors provide an express grant of patent rights. However, a larger work using the licensed work may be distributed under different terms and without source code for files added in the larger work."
          badgeUrl= "https://img.shields.io/badge/license-MOZILLA-red";
          break;
          case "Apache":
            licenseText="A permissive license whose main conditions require preservation of copyright and license notices. Contributors provide an express grant of patent rights. Licensed works, modifications, and larger works may be distributed under different terms and without source code."
            badgeUrl= "https://img.shields.io/badge/license-APACHE-yellow";
            break;
            case "Boost":
              licenseText="A simple permissive license only requiring preservation of copyright and license notices for source (and not binary) distribution. Licensed works, modifications, and larger works may be distributed under different terms and without source code."
              badgeUrl= "https://img.shields.io/badge/license-BOOST-brightgreen";
              break;
              default:
                break;
  }
} 

// TODO: Create an array of questions for user input
const askQuestions = () => { 
    return inquirer.prompt([
    {
        type: 'input',
        name: 'title',
        message: 'Enter the title of your project. (Required)',
        validate: titleInput => {
          if (titleInput) {
            return true;
          } else {
            console.log('You need to enter a project title!');
            return false;
          }
        }
      },
      {
        type: 'input',
        name: 'description',
        message: 'Enter a description of your project (Required)',
        validate: descriptionInput => {
          if (descriptionInput) {
            return true;
          } else {
            console.log('You need to enter a project description!');
            return false;
          }
        }
      },
      {
        type: 'input',
        name: 'install',
        message: 'Enter the install directions for this project. (Required)',
        validate: installInput => {
          if (installInput) {
            return true;
          } else {
            console.log('You need to enter installation instructions!');
            return false;
          }
        }
      },
      {
        type: 'input',
        name: 'usage',
        message: 'Enter the your usage informaion for this project. (Required)',
        validate: usageInput => {
          if (usageInput) {
            return true;
          } else {
            console.log('You need to enter the usage information!');
            return false;
          }
        }
      },
      
      {
        type: 'list',
        name: 'license',
        message: 'Please choose a license',
        choices: ['MIT', 'GPLv3', 'Mozilla', 'Apache', 'Boost']
      },
      {
        type: 'input',
        name: 'contribute',
        message: 'Enter the contibution guidelines for this project. (Required)',
        validate: contributeInput => {
          if (contributeInput) {
            return true;
          } else {
            console.log('You need to enter the contribution guidelines for this project!');
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
        message: 'Enter the github username. (Required)',
        validate: usernameInput => {
          if (usernameInput) {
            return true;
          } else {
            console.log('You need to enter the github username for this project!');
            return false;
          }
        }
      },
      {
        type: 'input',
        name: 'email',
        message: 'Enter the contact email for this project. (Required)',
        validate: emailInput => {
          if (emailInput) {
            return true;
          } else {
            console.log('You need to enter the test instructions for this project.!');
            return false;
          }
        }
      },
      {
        type: 'input',
        name: 'deployed',
        message: 'Enter the deployed link for this project. (Required)',
        validate: deployedInput => {
          if (deployedInput) {
            return true;
          } else {
            console.log('You need to enter the test instructions for this project.!');
            return false;
          }
        }
      },
])
.then(projectData => {
  console.log(projectData.title);
  selectBadge(projectData.license);
  writeToFile("README.md", writeMarkdown(projectData, badgeUrl).toString() );
});
}


// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, function (err) {
    if (err) throw err;
    console.log('Saved!');
  });
}

// TODO: Create a function to initialize app
function init() {
  askQuestions();
}

// Function call to initialize app
init();
