// spread -> expands an iterable into multiple values

// examples : 

// 1. copy an array

let arr = [1,2,3];
let arr2 = [...arr];
console.log(arr2);

//output -> [1,2,3]



// 2. merge arrays

let arr3 = [1,2,3];
let arr4 = [4,5,6];

let merged = [...arr3, ...arr4];

console.log(merged);

//output -> [1,2,3,4,5,6]



// 3. add elements while copying

let arr5 = [2,3,4];
let newArr = [1,...arr5,5];
console.log(newArr);

//output -> [1,2,3,4,5]


// 4. spread with strings

let str = "hello";
let chars = [...str];
console.log(chars);

//output -> ["h", "e", "l", "l", "o"]


// 5. spread with objects

let student = {
    name : "jayanta",
    age : 22
};
let copy = {...student};
console.log(copy);

//output ->
// {
//   name: "Jayanta",
//   age: 22
// }




// 6. merge objects 

let obj1 = {a : 1};
let obj2 = {b : 2};

let result = {...obj1,...obj2};

console.log(result);

//output -> a : 1,  b : 2



// 7. spread in function call 

let nums = [10,20,30];
function sum(a,b,c){
    return a+b+c;
}
console.log(sum(...nums));

//output -> 60