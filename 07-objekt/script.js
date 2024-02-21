


const cards = {
    type: "spades",
    color: "black",
    deck: ["A", "2", "3", "K", "J"]
}


console.log(cards)
cards.brand = "Lego";
console.log(cards)

// console.log(card)
// console.log(card.color)
// card.color = "black";
// console.log(card.color)

console.log(cards.deck)
for(let i = 0; cards.deck.length > i; i++) {
  console.log(cards.deck[i])
}


cards.deck.forEach(function(card){
  const listElement = document.createElement("li");
  listElement.textContent = card;
  document.body.appendChild(listElement);
})



const pokemon = {
  name: "Pikachu",
  power: "Electricity",
  look: "Cute mouse",
  found: ["Houses", "Forest", "Mountains", "Islands"],
  size: {
    height: 0.4,
    weight: 6.0
  }
}
console.log("Pikachu: ", pokemon)

let eve = {...pokemon};
eve.name = "Eve";
console.log('Eve', eve);
console.log("Pikachu: ", pokemon)


let a = 2;
let b = a;
b = 4;
console.log(b)
console.log(a);