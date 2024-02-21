
// Function declaration
function add(a, b) {
  return a + b;
}

// Function expression
const add2 = function(a,b) {
  console.log( a + b);
}
add(1,2);

// arrow function
const add3 = (a,b) =>  {
  let sum = a + b;
  return sum

}

const addIt = add3(1, 5)
console.log(addIt);

const oneParameterFunction = (p) => p

const doIt = oneParameterFunction("Hello World");
console.log(doIt);
