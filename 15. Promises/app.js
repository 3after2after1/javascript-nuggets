//prevent callback hell

//Promises are object that returns a value in the future but not now
//We pass a callback function into a promise as an argument
//This cb function takes two arguments: resolve, reject which are functions themselves
//Promises can be in either of these three states: Pending, Rejected, Fulfilled

const value = 2;
const promise = new Promise((resolve, reject) => {
  //   resolve([1, 2, 3, 4]);
  const random = Math.floor(Math.random() * 3);
  console.log(random);
  if (random == value) {
    resolve("You guessed correctly");
  } else {
    reject("wrong number");
  }
});
//promise.then is for resolve and promise.catch is for reject
console.log(promise);

promise.then((data) => console.log(data)).catch((error) => console.log(error));
