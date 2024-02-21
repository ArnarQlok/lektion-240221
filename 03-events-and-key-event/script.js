const button = document.querySelector("button");

// button.addEventListener('click', function() {
//   winIphone(15);
// });

// button.addEventListener('click', () => winIphone(15));

button.addEventListener('click', (event) => {
  console.log(event.target);
})

let pressedKeys = 'Hello world';

window.addEventListener('keyup', (e) => {
  pressedKeys += e.key;
  pressedKeys = pressedKeys.slice(-4)
  // pressedKeys += e.key;
  if(pressedKeys === "1337") {
   alert("Amigo du är leet")
  }
  // if(e.key === "hej") {
  //   alert("iphoonne")
  // }
  console.log(pressedKeys);
})


function winIphone(iphoneModell) {
  alert("You won a new iphone " + iphoneModell);
}