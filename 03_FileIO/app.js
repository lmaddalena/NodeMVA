var fs = require('fs');

// lettura sincrona
var contents = fs.readFileSync('package.json').toString();
console.log(contents);

// lettura asincrona
fs.readFile('package.json', function (err, buf) {
    console.log(buf.toString());
});