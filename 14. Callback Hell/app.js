//  Javascript Nuggets - Callback Hell
// after 1s first red;
// after 3s second blue; 4s (3s after turning red)
// after 2s third green; 6s (2s after turning blue)
// IN SEQUENCE !!!!

const first = document.querySelector(".first");
const second = document.querySelector(".second");
const third = document.querySelector(".third");
const btn = document.querySelector(".btn");

//this solution will not serve our purpose
// btn.addEventListener("click", () => {
//   setTimeout(() => {
//     first.style.color = "red";
//   }, 1000);
//   setTimeout(() => {
//     second.style.color = "blue";
//   }, 3000);
//   setTimeout(() => {
//     third.style.color = "green";
//   }, 2000);
// });

//!this is callback hell
btn.addEventListener("click", () => {
  setTimeout(() => {
    first.style.color = "red";
    setTimeout(() => {
      second.style.color = "blue";
      setTimeout(() => {
        third.style.color = "green";
      }, 2000);
    }, 3000);
  }, 1000);
});

//? promises, async and await is the solution that will make our code readable
