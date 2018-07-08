/*
 * This file is used to judge whether 'rules' is array type.
 */
const colors = require('colors');

const rules = require('./proxy-pac.test');

const result = rules instanceof Array;

if (result) {
    console.log('\n  √ Test Pass...  \n'.green);
}
