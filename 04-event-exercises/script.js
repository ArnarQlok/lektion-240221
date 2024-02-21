// document.querySelector("#greetButton").addEventListener('dblclick', () => console.log("Hello Worls"));

function greet() {
  alert("Tjena Mars!")
}


// Övning 2
const changeTextButton = document.getElementById("changeText");
const textField = document.getElementById("textField");
function handleChangeText() {
  textField.textContent = "Hej världen";
}
changeTextButton.addEventListener('click', handleChangeText)


// Övning 3

const colorField = document.getElementById("colorField");

colorField.addEventListener('mouseover', function()  {
  this.style.backgroundColor = "royalblue"
})

colorField.addEventListener('mouseleave', function(){
  this.style.backgroundColor = '';
})

// Övning 4
const pokemons = ["Bulbasaur", "Pikachu"]
const myForm = document.getElementById("myForm");
myForm.addEventListener('submit', (ev) => {
  ev.preventDefault();
  let inputValue = document.getElementById("inputField")
  pokemons.push(inputValue.value);
  printPokemons(pokemons)
  inputValue.value = ""
})

function printPokemons(pokemonArray) {
  const pokemonList = document.createElement('ul');
  
  pokemonArray.forEach((pokemon) => {
    const li = document.createElement('li')
    li.textContent = pokemon;
    pokemonList.appendChild(li);
  })
  document.body.appendChild(pokemonList)
}

const darkMode = document.getElementById("darkMode");
darkMode.addEventListener("click", () => {
  document.body.classList.toggle("dark")
})