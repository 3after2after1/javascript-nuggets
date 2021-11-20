//Filter - returns a new array, can manipulate size of new array (unlike map), returns based on condition

//Find - returns single instance (object), returns first match, if no match - undefined

const people = [
  { name: "bob", age: 20, position: "developer" },
  { name: "peter", age: 31, position: "designer" },
  { name: "susy", age: 30, position: "architect" },
  { name: "anna", age: 25, position: "intern" },
];

//filter
const youngPeople = people.filter((person) => {
  return person.age < 30;
});

console.log(youngPeople);
const developers = people.filter((person) => person.position === "developer");
//no match
const seniorDev = people.filter((person) => person.position === "senior dev");
//Find
const peter = people.find((person) => person.name === "peter");
console.log(peter); //! just item without array unlike filter
//no match
const oldPerson = people.find((person) => person.age > 35);
console.log(oldPerson); //! will return undefined since no match. If it was filter, it returns [] if no match
//multiple matches - no match
const randomPerson = people.find((person) => person.age > 25);
console.log(randomPerson);
