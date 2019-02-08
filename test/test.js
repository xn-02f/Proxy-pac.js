/*
 * This file is used to judge whether 'rules' is array type.
 */
const pac = require('./proxy-pac.test');
const gfwlist = require('./gfwlist.test');

if (pac instanceof Array) {
    console.log('\n  ✔ Proxy-pac Test Pass...\n');
} else {
    throw new Error('pac is not array...')
}

if (gfwlist instanceof Array) {
    console.log('\n  ✔ Gfwlist Test Pass...\n');
} else {
    throw new Error('gfwlist is not array...')
}
