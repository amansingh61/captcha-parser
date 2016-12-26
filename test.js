var captcha = require("captcha-parser");
var fs = require("fs");
var buf = fs.readFileSync("captcha.bmp");

var pixMap = captcha.getPixelMapFromBuffer(buf);

console.log(captcha.getCaptcha(pixMap));