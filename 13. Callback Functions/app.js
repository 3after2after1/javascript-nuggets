//callback function is a function that we pass in as argument and execute it later
function makeUpperCase(value) {
  console.log(value.toUpperCase());
}

function reverseString(value) {
  console.log(value.split("").reverse().join(""));
}

function handleName(name, cb) {
  const fullName = `${name} smith`;
  cb(fullName);
}

handleName("peter", makeUpperCase);
// handleName("peter", makeUpperCase());
//!This is wrong as we are invoking the function in the function call itself
//! What we want is to invoke cb in the function body of handleName
//! So we just have to reference the function by passing the name
handleName("peter", reverseString);

//array methods, setTimeOut, event listeners

//TODO: You can pass in the function directly as an argument instead of invoking it

handleName("peter", (value) => {
  console.log(value);
});

const btn = document.querySelector(".btn");
btn.addEventListener("click", () => {
  console.log("Hello World!");
});

//array methods (map, filter, find, reduce), setTimeOut, event listeners
