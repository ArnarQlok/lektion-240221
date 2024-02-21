const header = document.querySelector("#header");
const list = document.querySelector("ul");
const listElements = document.querySelectorAll("li");

listElements[0].style.fontSize = "2rem";
listElements[0].style.color = "royalblue";
//listElements[0].remove();


const newListItem = document.createElement("li");
newListItem.textContent = "Fyran försvann"
list.appendChild(newListItem);


const header2 = document.createElement("h2");
header2.textContent = "Ny rubrik";
document.body.append(header2);


document.querySelector("a").setAttribute("href", "https://google.com")