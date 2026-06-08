//Logical AND  -> if one false then it is false

let marks = 75;

if(marks >= 33 && marks >=80){
    console.log("Pass");
    console.log("A+");
} else {
    console.log("Fail");
}

//Output -> fail  because one condition is false

//Logical OR  -> if one true then it is true

let marks1 = 75;

if(marks >= 33 || marks >= 80){
    console.log("Pass");
    console.log("A+")
} else {
    console.log("Fail");
}

//output -> Pass , A+   print both because one condition is true then overall condition is true

//logical NOT  -> oposite means true-> false, false -> true

let a = 20;
let b = 30;
console.log(!(a>b));

//output -> true