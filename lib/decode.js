/**
 * Step 1: Decode gfwlist.txt.
 */
const fs = require('fs');
const path = require('path');

const Base64 = require('js-base64').Base64;

// The 'gfwlist.txt' file absolute path string.
const filePath = path.resolve(__dirname, 'gfwlist', 'gfwlist.txt');

// The file path name that is decode by 'js-base64'.
const outputPath = path.resolve(__dirname, 'tmp', 'gfwlist-decoded.txt');

// The string in 'gfwlist.txt' file.
const gfwlistText = fs.readFileSync(filePath, 'utf8');

// The string that is decoded.
const base64String = Base64.decode(gfwlistText);

// Create 'gfwlist.txt' file in 'lib' folder.
fs.createWriteStream(outputPath).write(base64String, 'utf8');
