//Array.from - NOT ON PROTOTYPE

//from - returns Array Object from an object (iterable or has length property)
//with a length property or an iterable object
//from - turns array-like/ish into array - String, nodeList (can call foreach but cannot use filter directly), Set

const udemy = "udemy";

console.log(Array.from(udemy));

const text = document.querySelectorAll(".text");
//filter or find method will not work on text directly

const newText = Array.from(text).find((item) => item.textContent === "person");
// console.log(newText);

//Array with 120 items
//callback functions will be called against each indvidual item
//whatever I return from function will be placed into that specific item
const items = Array.from({ length: 120 }, (_, index) => index);
const itemsPerPage = 14;
const pages = Math.ceil(items.length / itemsPerPage);

const newItems = Array.from({ length: pages }, (_, index) => {
  const start = index * itemsPerPage;
  const tempItems = items.slice(start, start + itemsPerPage);
  return tempItems;
});

console.log(newItems);
