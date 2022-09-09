//Modules, encapsulated code (only share minimum)
//CommonJS, everyfile is module (by default)

const names = require("./4_name");
const sayhi = require("./5_utils");
// console.log(names);
const data = require('./6_alternative_flavor');
require('./7_mind_grenade');
// console.log(data);

// sayhi("Linda");
// sayhi(names.lawrence);
// sayhi(names.aiden);