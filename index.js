const inquirer = require('inquirer');
const fs = require('fs');

//Questions for the ReadMe file to be generated
inquirer.prompt(
    [
        {
            type: 'input',
            messages: 'What is your Project Title?',
            name: 'Title',
            validate: function
        }

        {
            type: 'input',
            messages: 'Describe your project.',
            name: 'Description',
        }

        {
            type: 'input',
            messages: 'What are the installation instructions?',
            name: 'Installation',
        }

        {
            type: 'input',
            messages: 'What is the usage information?',
            name: 'Usage',
        }

        {
            type: 'input',
            messages: 'What contributions are there?',
            name: 'Contribution',
        }

        {
            type: 'input',
            messages: 'What tests were used?',
            name: 'Test',
        }

        {
            type: 'list',
            messages: 'What license did you use?',
            name: 'License',
            choices: [],
        }

        {
            type: 'input',
            messages: 'What is your Github username?',
            name: 'github',
        }

        {
            type: 'input',
            messages: 'What is your email?',
            name: 'email',
        }
    ]

)