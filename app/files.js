// there are two ways to modify files in node js
// 1 is through using synchronous methods like readFileSync and writeFileSync
// 2 The other is through using asynchronous methods like promises that are available in the 'fs' module that is part of node

const fs = require('fs').promises; // we are only requiring the promises modules from fs

/**
 * We are going to hardcode the file to be modified
 * This modifyFile is an async function that replaces the word hellp in the file to goodbye
 */
exports.modifyFile = async function(){
    // the processes object can be used to extract info about the current thread
    const file = `${process.cwd()}/folderName/index.md`

    console.log("Inside the actual function: file path is ", file);
    return fs.readFile(file, 'utf8').then(content => {
        const newContent = content.replace('Hello', 'Goodbye')
        return fs.writeFile(file, newContent);
    })
}