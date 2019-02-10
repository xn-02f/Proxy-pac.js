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
 * @type {string} Banner and Copyright Information.
 */
const banner = `/*
 * This file is part of Proxy-pac.js
 * https://github.com/huiyifyj/Proxy-pac.js
 *
 * This fille is generated inspired by gfwlist/gfwlist.
 *
 * GFWList is unlikely to fully comprise the real
 * rules being deployed inside GFW system. We try
 * our best to keep the list up to date. Please
 * contact us regarding URL submission / removal,
 * or suggestion / enhancement at issue tracker:
 * https://github.com/gfwlist/gfwlist/issues/.
 */

`;

/**
 * @type {writeSteam}
 */
const writeSteam = fs.createWriteStream(generateFile);

writeSteam.write(banner + 'var rules = [\n');

rl.on('line', (lineString) => {

    if (lineString.substr(0,1) !== '!' && lineString.substr(0,1) !== '[' && lineString !== '') {
        writeSteam.write('    "' + lineString + '",\n');
    }

});

setTimeout(() => {
    writeSteam.write('];\n');
}, 1000);
