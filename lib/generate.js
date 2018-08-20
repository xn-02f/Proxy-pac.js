/**
 * Step 2: Generate list file.
 */
const fs = require('fs');
const path = require('path');
const readline = require('readline');

const readPath = path.resolve(__dirname, 'gfwlist-decoded.txt');

const outputFile = path.resolve(__dirname, 'gfw-list.js');

const rl = readline.createInterface({
    input: fs.createReadStream(readPath),
    crlfDelay: Infinity
});

let bool = false;

rl.on('line', (lineString) => {

    if (bool) {
        bool = true;
    } else {
        (lineString.substr(0,1) == '!') ?
            null :
            console.log(lineString);
    }

});
