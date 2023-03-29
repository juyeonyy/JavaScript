// // Method 1
// function alertFunction() {
//   alert("YAY! YOU DID IT!");
// }

// // Method 2
const btn = document.querySelector("#btn");
// btn.onclick = alertFunction;

// // Method 3
// const btnTwo = document.querySelector("#btnTwo");
// btnTwo.addEventListener("click", alertFunction);

btn.addEventListener("click", function (e) {
  e.target.style.background = "blue";
  console.log(e.target);
});
