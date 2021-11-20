//faster/easier way to access/unpack variables from arrays, objects (later videos):

const fruits = ["orange", "banana", "lemon"];
const friends = ["john", "peter", "bob", "anna", "kelly"];

const fruits1 = fruits[0];
const fruits2 = fruits[1];
const fruits3 = fruits[2];

const [john, , bob, , kelly] = friends;
//can skip using comma
console.log(john, bob, kelly);

let first = "bob";
let second = "john";

[second, first] = [first, second];
console.log(first, second);
