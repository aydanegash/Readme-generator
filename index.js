const inquirer = require('inquirer');
const fs = require('fs');
const util = require('util');


const writeFileAsync = util.promisify(fs.writeFile);

//Questions for the ReadMe file to be generated
const promptUser = () => {
  return inquirer.prompt([
        {
            type: 'input',
            name: 'title',
            messages: 'What is your Project Title?',
        },
        {
            type: 'input',
            name: 'description',
            messages: 'Describe your project.',
            
        },
        {
            type: 'input',
            name: 'installation',
            messages: 'What are the installation instructions?',
            
        },
        {
            type: 'input',
            name: 'usage',
            messages: 'What is the usage information?',
            
        },
        {
            type: 'input',
            name: 'contribution',
            messages: 'What contributions are there?',
            
        },
        {
            type: 'input',
            name: 'tests',
            messages: 'What tests were used?',
            
        },
        {
            type: 'list',
            name: 'license',
            messages: 'What license did you use?',
            choices: ['The MIT License','The GPL License', 'Apache License', 'GMU License', 'N/A'],
        },
        {
            type: 'input',
            name: 'github',
            messages: 'What is your Github username?',
            
        },
        {
            type: 'input',
            messages: 'What is your email?',
            name: 'email',
            
        },
    ]);   
};    




// Markdown template for the ReadMe

const template = (markdownfile) => {
 
 title

# Table of Contents
   
    * [Description](#description)
    * [Installation](#instalation)
    * [Usage](#usage)
    * [Contribution](#contribution)
    * [Tests](#tests)
    * [License](license)
   

## Description 
    ${description}
## Installation 
    ${installation}
## Usage 
    ${usage}
## Contribution 
    ${contribution}
## Tests 
    ${tests}
## License 
    ${license}

## Contact 
* Github: ${github}
*Email: ${email}; 

createNewfile(title,template);
}


function createNewfile(fileName, data) {
     fs.writeFile('Readme1.md',data,(err)=>{
         if (err) {
             console.log(err);
         }
         console.log("Readme had been generated.");
     });
    } 