const people = [
  {
    name: "bob",
    age: 20,
    position: "developer",
  },
  {
    name: "anna",
    age: 25,
    position: "designer",
  },
  {
    name: "susy",
    age: 30,
    position: "the boss",
  },
];

const ages = people.map((person) => {
  return person.age * 2;
});
const newPeople = people.map((item) => {
  return {
    firstName: item.name.toUpperCase(),
    oldAge: item.age + 20,
  };
});

const names = people.map((person) => `<h3>${person.name}</h3>`);
const results = document.querySelector("#result");
console.log(results);
results.innerHTML = names.join("");

//Quokka.js - Extension
//returns a new array
// does not change the size of original array (unlike filter)
//uses values from original array when making new one
