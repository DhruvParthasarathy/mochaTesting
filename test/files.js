// we have installed the mock-fs library that helps us mock the file structure

const mock = require('mock-fs');
const modifyFile = require("../app/files").modifyFile;
const expect = require('chai').expect;
const fs = require('fs').promises;

describe("modifyFile test script", function(){
    
    this.beforeAll(function() {

        // I want to mock a particular file structure
        mock({
            'folderName': {
                'index.md' : '# Hello World!',
            },
        });
    });
    

    it("should replace hello with goodbye", async function(){

        // I want to mock a particular file structure
        // mock({
        //     'folderName': {
        //         'index.md' : '# Hello World!',
        //     },
        // });

        // in the before all hook, the file has been created
        // let's call test the original function
        await modifyFile();

        // reading the contents of the file
        const filePath = `${process.cwd()}/folderName/index.md`;
        console.log("Inside the test: file path is ", filePath);

        console.log("Line after done");


        let content = await fs.readFile(filePath, 'utf-8');
        content = content,toString();
        console.log("Logging content: ", content);
        
        expect(content).to.equal("# Goodbye World!");
        // mock.restore();
    })




    this.afterAll(function(){
        mock.restore();
    })
})