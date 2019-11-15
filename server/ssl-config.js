var path = require('path'),
    fs = require("fs");
exports.ykeky = fs.readFileSync(path.join(__dirname, './ssl-certificate/sslykeky.key')).toString();
exports.ubuntu = fs.readFileSync(path.join(__dirname, './ssl-certificate/sslykeky.crt')).toString();