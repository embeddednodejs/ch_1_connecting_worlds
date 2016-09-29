
// function scope
var foo = 1;
var bar = function() { 
   console.log(foo);
}
bar();



// block scope
var outside = 1;
const constNumber = 42;
function printBlock() {
  let inside = 3;
  console.log(outside, inside, constNumber);
}
printBlock();


