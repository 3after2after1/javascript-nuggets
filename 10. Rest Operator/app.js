//Rest operator...
//gathers or collects items
//destructuring, functions declaration
//placement important, careful with the same name
//rets when declare function, spread when invoke functions
//always place rest at the very end

//*arrays
const fruits = ["apple", "orange", "lemon", "banana"];
const [first, second, ...restOfTheFruits] = fruits; //collecting rest of value
// console.log(first, rest);
const specificFruit = restOfTheFruits.find((fruit) => fruit === "lemon");

//*objects
const person = { name: "john", lastName: "smith", job: "developer" };
const { job, ...rest } = person;
//const {...rest, job} will not work
console.log(job, rest);

//*function
const getAverage = (person, ...scores) => {
  console.log(person);
  console.log(scores);
  const average =
    scores.reduce((average, score) => (total = total + score), 0) /
    scores.length;
  console.log(average);
};

const testScores = [67, 78, 88, 65, 67];
getAverage(person.name, ...testScores);
