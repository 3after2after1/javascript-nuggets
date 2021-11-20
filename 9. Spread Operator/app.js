//Spread operator
//Allows an iterable to spread/expand individually inside receiver
//Split into single item and COPY them (we are not referencing the item)

const udemy = "udemy";
const letters = [...udemy];
// console.log(letters);

const boys = ["john", "peter", "bob"];
const girls = ["susan", "anna"];

const bestFriend = "arnold";

const friends = [...boys, bestFriend, ...girls];
// console.log(friends);

//reference is a problem
const newFriends = friends;
// newFriends[0] = "nancy";
// console.log(friends);
// console.log(newFriends);

//! since newFriends has the same reference as friends array in memory, changing a value in newFriends will also
//! affect friends array

//copying using spread operator is the solution
const newFriends1 = [...friends];
newFriends1[0] = "nancy";
console.log(friends);
console.log(newFriends1);

// ES2018 - ES8 Objects

const person = { name: "john", job: "developer" };
const newPerson = { ...person, city: "chicago", name: "peter" };
//* we can add new properties or override existing ones

console.log(newPerson);
