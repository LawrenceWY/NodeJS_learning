// //Modules, encapsulated code (only share minimum)
// //CommonJS, everyfile is module (by default)

// const names = require("./4_name");
// const sayhi = require("./5_utils");
// // console.log(names);
// const data = require('./6_alternative_flavor');
// require('./7_mind_grenade');
// // console.log(data);

// // sayhi("Linda");
// // sayhi(names.lawrence);
// // sayhi(names.aiden);

// const os = require('os');

// const user = os.userInfo();

// console.log(user);

// console.log(`The system uptime is ${os.uptime()} seconds`);

// const currentOS = {
//     name:os.type(),
//     release:os.release(),
//     totalMem:os.totalmem(),
//     freeMen:os.freemem(),
// }

// console.log(currentOS);

// const path = require('path');

// console.log(path.sep);

// const filePath = path.join('/content', 'subfolder', 'test.txt');
// console.log(filePath);

// const base = path.basename(filePath);
// console.log(base);

// const absolute = path.resolve(__dirname, 'content','subfolder', 'test.txt');
// console.log(absolute);

// const { readFile, writeFile } = require("fs");

// readFile("./content/first.txt", "utf8", (err, result) => {
//   if (err) {
//     console.log(err);
//     return;
//   }
//   const first = result;
//   readFile("./content/second.txt", "utf8", (err, result) => {
//     if (err) {
//       console.log(err);
//       return;
//     }
//     const second = result;
//     writeFile(
//       "./content/result-async.txt",
//       `Here is the result ${first}, ${second}`,
//       (err, result) => {
//         if (err) {
//           console.log(err);
//           return;
//         }
//         console.log(result);
//       }
//     );
//   });
// });

// const http = require("http");

// const server = http.createServer((req, res) => {
//   if (req.url === '/') {
//     res.end('Welcome to our home page');
//   }
//   if (req.url === '/about') {
//     res.end('Here is our history');
//   }

//   res.end(`
//   <h1>Oops!</h1>
//   <p>We can't seem to find the page you are looking for</p>
//   <a href="/">back home</a>
//   `);
// });

// server.listen(5000);

//npm - global command, comes with code
//npm --version

//local dependency - sue it only in this particular project
//npm i <packageName>

//global dependency - use it in any project
//npm install -g <packageName>
//sudo npm install -g <packageName> (mac)

//package.hson - manifest file (stores important info about project/package)
//manual approach (create package.json in the root, create properties etc)
//npm init (step by step, press enter to skip)
//npm init -y (everyting default)


const _ = require('lodash');

const items = [1,[2,[3,[4]]]];
const newItems = _.flattenDeep(items);
console.log(newItems);
