/**
 * Step 2: Generate list file.
 */
const fs = require('fs');
const path = require('path');
const readline = require('readline');

const readPath = path.resolve(__dirname, 'gfwlist-decoded.txt');

const generateFile = path.resolve(__dirname, '..', 'src', 'gfwlist.js');

const rl = readline.createInterface({
    input: fs.createReadStream(readPath),
    crlfDelay: Infinity
});

/**
 * @type {writeSteam}
 */
const writeSteam = fs.createWriteStream(generateFile);

writeSteam.write('var rules = [\n');

rl.on('line', (lineString) => {

    if (lineString.substr(0,1) !== '!' && lineString.substr(0,1) !== '[' && lineString !== '') {
        writeSteam.write('    "' + lineString + '",\n');
    }

});

setTimeout(() => {
    writeSteam.write('];\n');
}, 1000);
