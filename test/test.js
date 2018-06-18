// console.log("Prox-pac.js is developing.");
// console.log("But, ");
// console.log("These files can be used currently as pac file for you proxy (eg. shadowsocks) on linux.");

const rules = require('./proxy-pac.test');

const arr = rules;

arr.forEach(function(item,index){
    console.log(item + '');
})