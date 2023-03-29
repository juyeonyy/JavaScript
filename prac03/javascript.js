const container = document.querySelector("#container");

const content = document.createElement("div");
content.classList.add("content");
content.textContent = "This is the glorious text-content!";

container.appendChild(content);

const p = document.createElement("p");
p.textContent = "Hey I'm red!";
p.style.color = "red";

container.appendChild(p);

const h3 = document.createElement("h3");
h3.textContent = "I'm a blue h3!";
h3.style.color = "blue";

container.appendChild(h3);

const div = document.createElement("div");
div.classList.add("container");
div.style.cssText = "background-color:pink; border:1px black;";

const h1 = document.createElement("h1");
h1.textContent = "I'm in a div";

const p1 = document.createElement("p");
p1.textContent = "ME TOO!";

div.appendChild(h1);
div.appendChild(p1);

container.appendChild(div);
