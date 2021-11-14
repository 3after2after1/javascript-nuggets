const heading = document.querySelector(".heading");
// console.log(heading);

const listItems = document.querySelectorAll(".list-items");
// console.log(listItems);

const getElement = (selector, isList) => {
  const el = isList
    ? [...document.querySelectorAll(selector)]
    : document.querySelector(selector);
  if ((!isList && el) || (isList && !el.length < 1)) return el;
  throw new Error(`Please double check selector: ${selector}`);
};

console.log(getElement(".list-items", true));
