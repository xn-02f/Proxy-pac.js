/*
 * This file is used to judge whether 'rules' is array type.
 */
const rules = require('./proxy-pac.test');

if (rules instanceof Array) {
    console.log('\n  ✔ Test Pass...\n');
} else {
    throw new Error('rules is not array...')
}
