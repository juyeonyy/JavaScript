// Method 2
const btn = document.querySelector("#btn");
btn.onclick = () => alert("Hello Wolrd");

// Method 3
const btnTwo = document.querySelector("#btnTwo");
btnTwo.addEventListener("click", () => {
  alert("Hello World");
});
