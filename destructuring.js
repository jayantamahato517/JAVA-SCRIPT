// destructuring -> storing values of array into multiple variables

// example : 01
let arr = [10,20,30];
let[a,b,c] = arr;

console.log(a);
console.log(b);
console.log(c);

//output : 10, 20, 30


// example : 02
// skip elements

let arr2 = [10,20,30,40];
let[a1, ,c1] = arr2;
console.log(a);
console.log(c);

//output -> 10, 30


// example : 03
// assign default values

let num = [10];

let[x , y = 50] = num;

console.log(x);
console.log(y);

// output -> 10, 50