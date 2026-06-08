// trim -> remove extra spaces
let name = "    jayanta    ";
console.log(name.trim());
//output - > jayanta



//UpperCase and LowerCase
console.log(name.toUpperCase());
console.log(name.toLowerCase());
// output - > JAYANTA
// output - > jayanta




//indexOf()
console.log(name.indexOf("jay"));
// output - > 4



// method - Chaining
console.log(name.trim().toUpperCase());
// remove extra space and also convert into uppercase



// slice - Method
let str = "iLoveCoding";
console.log(str.slice(1,5));
// output - > Love



// replace - method
console.log(str.replace("Love","Do"));
// output iDoCoding


// repeat
console.log(str.repeat(3));
//output - > iLoveCoding iLoveCoding iLoveCoding