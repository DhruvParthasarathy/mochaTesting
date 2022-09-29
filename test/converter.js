/**
 * Nocha helps us describe the features that we are implementing by giving us a describe function that encapsulates our expectations
 */

/**we use the chai library to use it;s expect module */
var expect = require("chai").expect; // extract the expect module from chai
var converter = require("../app/converter"); // we require all exported functions from converter


describe("Color Code Converter", function(){
    // we are going to describe how the color code converter has to
    // function
    
    // Here we are going to describe this function in better detail

    describe("RGB to Hex Conversion", function(){
        it("converts the basic colors fro rgb to hex", function(){
            // we need to check if it converts the basic colors
            var redHex = converter.rgbToHex(255, 0, 0);
            var blueHex = converter.rgbToHex(0, 255, 0);
            var greenHex = converter.rgbToHex(0, 0, 255);

            // we expect the redHex to be ff0000
            expect(redHex).to.equal("ff0000");
            expect(blueHex).to.equal("0000ff");
            expect(greenHex).to.equal("00ff00");

        });
    });

    describe("Hex to RGB conversion", function(){

        // the test here
        it("converts basic colors from hex to rgb", function(){
            // here we pass in hex colors and check if we get back rgb

            var red = converter.hexToRgb("ff0000")
            var green = converter.hexToRgb("00ff00")
            var blue = converter.hexToRgb("0000ff")
            

            // here we use deep equal because we are going to match
            // the arrays elementwise
            expect(red).to.deep.equal([255, 0, 0]);
            expect(green).to.deep.equal([0, 255, 0]);
            expect(blue).to.deep.equal([0, 0, 255]);

        });
    });
});