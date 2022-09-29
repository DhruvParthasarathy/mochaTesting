// import the expect module from chai

// testing asynchronous calls using mocha and chai

var expect = require("chai").expect; // chai is the library that has the test functions
var request = require("request");


// the functionality that we want to test 
// describing it with mocha

describe("Color Code Converter API", function(){

    describe("RGB to HEX conversion", function(){

        // we are storing the entire path of the resource we want to test
        // in this variable

        // the function runs at this end point, so we need to start an express server to serve this resource
        var url = "http://localhost:3000/rgbToHex?red=255&green=255&blue=255";

        /**
         * To make a request, we will use the Request package. We need to pass two arguments to it: a URL to visit, and a function to be invoked when the request is completed. We will set up our expectations inside those callback functions.
         */

        it("rgbToHex fn returns status 200", function(done){
            request(url, function(error, response, body){
                console.log(url, response.statusCode)
               expect(response.statusCode).to.equal(200); 

               /**
                * For every it that needs to wait for a response value, we will inject a done callback function and call it only when our expectations were executed. This way, Mocha will know it needs to wait for some of the expectations.
                */
               done();
            })
        });
        it("rgbToHex returns the color in hex", function(done){
            request(url, function(error, response, body){
                expect(body).to.equal("ffffff"); 
                done();
             })
        });
    })

    describe("Hex to RGB conversion", function(){

        var url = "http://localhost:3000/hexToRgb?hex=00ff00";

        it("hex to rgb returns status 200", function(done){
            request(url, function(error, response, body){
                expect(response.statusCode).to.equal(200);
                done(); 
             })
        });

        it("hex to rgb returns the color in RGB", function(done){
            request(url, function(error, response, body){
                expect(body).to.equal("[0,255,0]"); 
                done();
             })
        });
    })
})