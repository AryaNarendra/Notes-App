const chalk = require('chalk');
const yargs = require('yargs');
const notes = require('./notes.js');

yargs.command({
    command: 'add',
    describe: 'Adding a Note',
    builder: {
        title: {
            describe: 'Adding title',
            demandOption: true,
            type: 'string'
        },
        body: {
            describe: 'Whole Body',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv) {
        notes.addNotes(argv.title, argv.body)
    }
});

yargs.command({
    command: 'remove',
    describe: 'Removing a Note',
    builder: {
        title: {
            describe: 'Removing Note',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv) {
        notes.removeNotes(argv.title)
    }
});

yargs.command({
    command: 'list',
    describe: 'List all Notes',
    handler() {
        notes.listNotes()
    }
})

yargs.command({
    command: 'read',
    describe: 'Read Note',
    builder: {
        title: {
            describe: 'Reading a Note!',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv) {
        notes.readNote(argv.title)
    }
})

yargs.parse();

//console.log(yargs.argv);
// const command = process.argv[2]

// if(command === 'add'){
//     console.log('Adding Note!')
// }else if(command === 'remove'){
//     console.log('Removing Note!')
// }


// console.log(getNotes())
// console.log(chalk.blue.bold.inverse('Success'));
// console.log(process.argv[2])

//const validator = require('validator')
//console.log(validator.isURL('https://mead.io'))
//console.log(validator.isEmail('naruto@xyz.abc'))

// const add = require('./utils.js') 
// sum = add(5 , -2)
// console.log(sum)

//const name = require('./utils.js') 
//console.log(name)

//const fs = require('fs') 
//fs.writeFileSync('notes.txt','Welcome to the party!')
//fs.appendFileSync('notes.txt','My name is Naruto')