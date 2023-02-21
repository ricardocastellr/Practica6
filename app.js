let greet = require('./greet1.js');
//let greet2 = require('./greet2.js').greet;

let greet2a = require('./greet2.js');
const greet3 = require('./greet3.js')
const Greet4= require('./greet4.js')
const greet5 = require('./greet5.js')


greet();
//greet2();

greet2a.greet();
console.log(greet3);
greet3.greet();

greet3.greeting = "Hello from the app";

let greet3b = require('./greet3.js');
greet3b.greet();

let myGreet = new (Greet4);
myGreet.greet()

greet5.greet();
greet5.jump();
greet5.osu();
greet5.onepiece();