exports.rgbToHex = function (red, blue, green) {
    // We will use the toString method of the incoming numbers, combined with the number 16, to invoke a conversion to hexadecimal representation.

    var redHex = red.toString(16);
    var blueHex = blue.toString(16);
    var greenHex = green.toString(16);

    return pad(redHex) + pad(greenHex) + pad(blueHex);

}

function pad(hex) {
    // we pad this with one zero because characters in hexa has 2 digits
    return hex.length === 1 ? "0" + hex : hex;
}

exports.hexToRgb = function(hex){

    // we extract the parts of r g and b from the hex code

    // we extract the first character from hexa
    // we use, 16 to mention that it has to be converted from a hexa dec character 
    var red = parseInt(hex.substring(0,2), 16);
    var green = parseInt(hex.substring(2,4), 16);
    var blue = parseInt(hex.substring(4,6), 16);

    return [red, blue, green];
}