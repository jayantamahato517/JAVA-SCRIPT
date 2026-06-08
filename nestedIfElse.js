//check number is positive,even,odd and negative

let number = 15;

if(number > 0){
    console.log("Positive number");

    if(number % 2 == 0){
        console.log("Even number");
    } else {
        console.log("Odd number");
    }
} else {
    console.log("Negative number or zero");
}



//marks system

let marks = 90;

if(marks >= 33){
    console.log("Pass");
    if(marks >= 80){
        console.log("Grade : O");
    } else {
        console.log("Grade : A");
    }
} else {
    console.log("Better luck next time");
}