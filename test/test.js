/*
 * This file is used to judge whether 'rules' is array type.
 */
const rules = require('./proxy-pac.test');

const arr = rules;

arr.forEach(function(item,index){
    console.log(item + '');
})
