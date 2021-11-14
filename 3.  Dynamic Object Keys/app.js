//dot notation
const person = {
  name: "john",
};
person.age = 25;
console.log(person);
//square bracket notation

const items = {
  "featured-items": ["item1, item2"],
  //!have no choice but to use square bracket notation
};

console.log(items["featured-items"]);
console.log(person["name"]);

let appState = "loading";
appState = "error";
const keyName = "computer";
const app = {
  [appState]: true,
};

app[keyName] = "apple";
console.log(app);

const state = {
  loading: true,
  name: "",
  job: "",
};

const updateState = (key, value) => {
  state[key] = value;
};

updateState("name", "john");
updateState("job", "developer");
updateState("products", "[]");
console.log(state);
