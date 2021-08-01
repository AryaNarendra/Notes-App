const chalk = require('chalk')
const fs = require('fs')

const addNotes = (title, body) => {
    const notes = loadNotes()
    //const duplicateNotes = notes.filter((note) => note.title === title)
    const duplicateNote = notes.find((note) => note.title === title)
   // debugger;
    if (!duplicateNote) {
        notes.push({
            title: title,
            body: body
        })
        saveNotes(notes)
        console.log(chalk.bgGreen('New Note added!'))
    } else console.log(chalk.bgRed('New Title is taken!'))

}

const saveNotes = (notes) => fs.writeFileSync('notes.json', JSON.stringify(notes))

const loadNotes = () => {
    try {
        const dataBuffer = fs.readFileSync('notes.json')
        const dataJSON = dataBuffer.toString()
        return JSON.parse(dataJSON)
    } catch (e) {
        return []
    }

}

const removeNotes = (title) => {
    const notes = loadNotes()
    const finalNotes = notes.filter((note) => note.title !== title)
    saveNotes(finalNotes)
    if (notes.length === finalNotes.length) console.log(chalk.bgRed('No Note Found!'))
    else console.log(chalk.bgGreen('Note removed successfully!'))
}

const listNotes = () => {
    const notes = loadNotes()
    console.log(chalk.blue.bgYellow('Your Notes...'))
    notes.forEach(note => {
        console.log(chalk.green.bold(note.title))
    });
}

const readNote = (title) => {
    const notes = loadNotes()
    const readNote = notes.find((note) => note.title === title)
    if(readNote){
        console.log(chalk.blue.bgYellow(readNote.title))
        console.log(chalk.green(readNote.body))
    }else console.log(chalk.bgRed('No Note Found'))

}

module.exports = {
    addNotes: addNotes,
    removeNotes: removeNotes,
    listNotes: listNotes,
    readNote: readNote
}