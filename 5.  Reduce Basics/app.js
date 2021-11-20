// Reduce
// Iterates, callback functions
// reduces to a single value - number, array, onject
// 1st parameter ('acc') - total of all calculations
// 2nd parameter ('curr') - current iteration/value

const staff = [
  { name: "bob", age: 20, position: "developer", salary: 100 },
  { name: "peter", age: 31, position: "designer", salary: 300 },
  { name: "susy", age: 30, position: "architect", salary: 400 },
  { name: "anna", age: 25, position: "intern", salary: 200 },
];

const dailyTotal = staff.reduce((total, person) => {
  //! always return accumulator, in our case, total, otherwise reduce will not work
  console.log(total);
  console.log(person.salary);
  total = total + person.salary;
  return total;
}, 0);

console.log(dailyTotal);
