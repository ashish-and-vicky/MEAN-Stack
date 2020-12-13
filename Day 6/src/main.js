/**
 * Local
 *  vs
 * Internal/Exteranl
 *
 */
const PI = require("./my-mod/my.module1");
const mod2 = require("./my-mod/my.module2");
const mod3 = require("./my-mod/my.module3");
const mod4 = require("./my-mod/my.module4");

// VALUES FROM MODULE-1
console.log(PI);
console.log("I am main function");

// VALUES FROM MODULE-2
console.log(mod2);
console.log(mod2.MY_APP_NAME);
console.log(mod2.MY_AREA);

// LOG THE VALUE FROM MOD-3
console.log(mod3);

// LOG THE VALUE FROM MOD-4
console.log(mod4);