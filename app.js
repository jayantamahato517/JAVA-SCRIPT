// console.log("hello world");
// console.log("jayanta");

// let a = 20;
// let b = 30;
// let sum = a+b;
// console.log("Sum is :",sum);
// console.log("mahato");

// let result = (`the sum is : ${a+b}`);
// console.log(result);

// let age = 21;
// console.log(age >= 21);

// console.log('A' > 'a');

// let age = 21;
// if(age >= 18){
//     console.log("you can vote");
// } else if(age < 18){
//     console.log("you can not vote");
// }

// if(marks >= 33){
//     if(marks >= 80)
//     console.log("O");
// } else {
//     console.log("O");
// }

// let number = 12;

// if(number > 0){
//     console.log("Positive number");

//     if(number % 2 == 0){
//         console.log("Even number");
//     } else {
//         console.log("Odd number");
//     }
// } else {
//     console.log("Negative number or zero");
// }

// if(2){
//     console.log("It has true value");
// } else {
//     console.log("It has false value");
// }


// let color = "blue";

// switch(color){
//     case "red":
//         console.log("Stop");
//         break;
//     case "yellow":
//         console.log("Slow down");
//         break;
//     case "green":
//         console.log("Go");
//         break;
//     default:
//         console.log("Broken light");
// }

// alert("thus ");

// alert("this is the alert");

// let name = prompt("Enter your name");
// console.log(name);
// console.error("jaya");

// let name ="   jayanta  ";
// console.log(name);
// console.log(name.trim());
// console.log(name.toUpperCase());
// console.log(name.toLowerCase());


// let str = "ILoveCoding";
// str.indexOf("Love");
// str.indexOf("J");

// let name = prompt("Enter your name");
// console.log(name);

// let str = "iLoveCoding";

// str.indexOf("Love");

// let name = "   jayanta    ";
// console.log("Original name : ", name);
// newName = name.trim();
// console.log("After the trim : ", newName);
// newName = newName.toUpperCase();
// console.log("After the uppercase : ", newName);

// let name = "   jaynata   ";
// let newName = name.trim().toUpperCase();
// console.log(newName);

// let primary = ["red","green","yellow"];
// let secondary = ["jay", "jayanta", "chhaya"];
// console.log(primary);

//indexOf
// console.log(primary.indexOf("yellow"));
// console.log(primary.indexOf("red"));

//if not exists in the primary array
// console.log(primary.includes("red"));
// console.log(primary.includes("blue"));


//concat
// console.log(primary.concat(secondary));

//reverse
// console.log(primary.reverse());



// let name = prompt("enter your name");
// console.log(name);

//

// const arr = [1,2,3];
// console.log(arr);
// arr.push(4);
// console.log(arr);
// arr = [1,2,2,2,2,2];
// console.log(arr);


// let todo = [['X',null,'0'],[null,'X',null],['0',null,'X']];
// console.log(todo);

// for(let i = 1; i<=5; i++){
//     console.log(i);
// }

//evenOrOdd

// let n = 11;
// if(n % 2 == 0){
//     console.log("Number is even");
// } else {
//     console.log("Number is odd");
// }


// for(let i = 5; i>=1; i--){
//     console.log(i);
// }

//oddNumbers

// let n = 50;
// for(let i = 0; i <= n ; i++){
//     if(n % 2 != 0){
//         console.log(i);
//     }
// }


// let n = 50;
// for(let i = 1; i <= n; i=i+2){
//     console.log(i);
// }

//even numbers

// let n = 10;
// for(let i = 2; i <= n ; i = i+2){
//     console.log(i);
// }

// console.log("backward");

// for(let i = n; i >= 1; i = i-2){
//     console.log(i);
// }


//Multiplication table

// for(let i = 5; i<= 50; i = i+5){
//     console.log(i)
// }

// let n = prompt("Enter a number");
// n = parseInt(n);
// for(let i = n; i<=n*10;i=i+n){
//     console.log(i);
// }

// for(let i=1; i<=3; i++){
//     console.log(`outer loop ${i}`);
//     for(let j=1; j<=3; j++){
//         console.log(j);
//     }
// }


// nested for loop

// for(let i=0;i<=5;i++){
//     for(let j=0;j<=i;j++){
//         console.log(j);
//     }
// }

// let student = {
//     name : "jayanta",
//     age : 23,
//     marks : 98
// };

// const student1 = {
//     name : "jayanta mahato",
//     age : 22,
//     marks : 90
// };

// let n = 2;
// while(n <= 20){
//     console.log(n);
//     n = n+2;
// }


// const movie = "avatar";
// let guess = prompt("Enter movie name");
// while((guess != movie) && (guess != 'Quit')){
//     guess = prompt("wrong guess please try again");
// }
// if(guess == movie){
//     console.log("Congrats!");
// } else {
//     console.log("You quit");
// }

// const movie = "avatar";
// let guess = prompt("Guess the movie name");
// while((guess != movie) && (guess != 'Quit')){
//     guess = prompt("Wrong guess please try again");
// }
// if(guess == movie){
//     console.log("Congrats!");
// } else {
//     console.log("You quit");
// }

// let n = 5;
// for(let i=0;i<=n;i++){
//     if(n == 3){
//         console.log(n);
//         break;
//     }
//     console.log(n);
// }

// let n = 1;
// while(n <= 5){
//     if(n == 3){
//         break;
//     }
//     console.log(n)
//     n++;
// }
// console.log("Break statement used");


// let i = 1;
// while(i <= 5){
//     if(i == 4){
//         break;
//     }
//     console.log(i);
//     i++;
// }

//


// let heros =[["iroman","spiderman","thor"],["superman","wonder woman","flash"]];
// for(let i=0;i<heros.length;i++){
//     console.log(i, heros[i], heros[i].length);
//     for(let j=0; j<heros[i].length; j++){
//         console.log(`j=${j}, ${heros[i][j]}`);
//     }
// }


// let fruits = ["Apple","Mango","Banana"];

// for(fruit of fruits){
//     console.log(fruit);
// }

// for(char of "Jayanta"){
//     console.log(char);
// }


// let colors = [["Red","Orange","Pink"],["Black","White","Yellow"]];

// for(list of colors){
//     for(color of list){
//         console.log(color);
//     }
// }

// let todo = [];

// let req = prompt("Please enter your request");

// while(true){
//     if(req == "quit"){
//         console.log("quitting app");
//         break;
//     }
//     if(req == "list"){
//         console.log("---------");
//         for(let i=0; i<todo.length;i++){
//             console.log(i,todo[i]);
//         }
//         console.log("--------");

//     } else if(req == "add"){
//         let task = prompt("Please enter the task you want to add");
    //     todo.push(task);
    //     console.log("task added");

    // } else if (req == "delete"){addEventListener
    //     let idx = prompt("Please enter the task index");
    //     todo.splice(idx,1);
    //     console.log("Task deleted");

//     } else {
//         console.log("Wrong request");
//     }
//     req = prompt("Please enter your request");
// }


//

// let post = {
//     user_name : "jayanta__136",
//     content : "This is my #firstPost",
//     likes : 200,
//     reposts : 5,
//     tages : ["@jayanta","@firstPost"]
// };

// let student = {
//     name : "jayanta",
//     marks : 90
// };

// let todo = [];
// let req = prompt("Enter your request");
// while(true){
//     if(req == "quit"){
//         console.log("Quitting app");
//         break;
//     } else if(req == "list"){
//         console.log("----------");
//         for(let i=0;i<todo.length;i++){
//             console.log(i, todo[i]);
//         }
//         console.log("---------");
//     } else if(req == "add"){
//         let task = prompt("Enter your task");
//         todo.push(task);
//         console.log("Task added");
//     } else if(req == "delete"){
//         let idx = prompt("Enter the index you can delete");
//         todo.splice(idx,1);
//         console.log("Task deleted");
//     } else{
//         console.log("Wrong request");
//     }
//     req = prompt("Enter your request");
// }


// let student = {
//     name : "jayanta",
//     age : 23
// };


// let student = {
//     name : "jayanta",
//     age : 23,
//     city : "Kolkata"
// };

// let students = {
//     jayanta : {
//         age : 23,
//         marks : 90
//     },
//     chhaya : {
//         age : 22,
//         marks : 98
//     },
//     anwesha : {
//         age : 22,
//         marks : 97
//     }
// };

// const classInfo = [
//     {
//         name : "jayanta",
//         age : 23,
//         city : "kolkata"
//     },
//     {
//         name : "anwesha",
//         age : 22,
//         city : "bardwan"
//     },
//     {
//         name : "chhaya",
//         age : 22,
//         city : "purulia"
//     },
// ];


// let a = 10;
// let b = 30;
// if(a > b && b > a){
//     console.log("b is greater than a")
// } else {
//     console.log("a is less than b");
// }

// let a = 66, b = 20;
// console.log(a > b ? a : b);

// let sum = 0;
// let n = 5;

// for(let i = 1; i <= n; i++){
//     sum += i;
// }
// console.log(sum);

// let num = 1234;
// let rev = 0;
// while(num > 0){
//     let digit = num % 10;
//     rev = rev * 10 + digit;
//     num = Math.floor(num / 10);
// }
// console.log(rev);


// let num = 1234;
// let rev = 0;
// while(num > 0){
//     let digit = num % 10;
//     rev = rev * 10 + digit;
//     num = Math.floor(num / 10);
// }
// console.log(rev);


// 


// const max = prompt("Enter the maximum number");
// const random = Math.floor(Math.random() * max) +1;
// let guess = prompt("Guess the number");

// while(true){
//     if(guess == "quit"){
//         console.log("You quit the game!");
//         break;

//     } if(guess == random){
//         console.log("Your guess was right! random number was : ", random);
//         break;

//     } else if(random > guess){
//         guess = prompt("Your guess was too small");
//     } else {
//         guess = prompt("Your guess was too larger");
//     }
// }

// function hello(){
//     console.log("hello");
// }
// hello();

// function print1to5(){
//     for(let i=1;i<=5;i++){
//         console.log(i);
//     }
// }
// print1to5();


// function rolldice(){
//     let rand = Math.floor(Math.random() * 6)+1;
//     console.log(rand);
// }
// rolldice();


// function student(name,age){
//     console.log(name,age);
// }
// student("jayanta", 23);
// student("sachin");
// student(20);


// function printSum(n){
//     let sum = 0;
//     for(let i=1;i<=n;i++){
//         sum += i;
//     }
//     return sum;
// }
// console.log(printSum(5));

// let sum = 40;
// function printsum(){
//     let a = 20;
//     let b = 5;
//     let sum = a+b;
//     console.log(sum);
    
// }

// printsum(5,5);
// console.log(sum);

// let str = ["Hi","My","Name","is","Jayanta"];
// function concat(str){
//     let result = " ";
//     for(let i=0;i<str.length;i++){
//         result += str[i];
//     }
//     return result;
// }
// console.log(concat(str)); 


// 

// let sum = function(a,b){
//     return a+b;
// }
// sum(1,2);

// sum = function(a,b){
//     console.log(a*b);
// }
// sum(3,2);


// 


// function multiGreet(func, count){
//     for(let i=1;i<=count;i++){
//         func();
//     }
// }
// let greet = function(){
//     console.log("Hello");
// }
// multiGreet(greet, 10);


//

// 

// const calculator = {
//     add(a,b){
//         return a+b;
//     },
//     sub(a,b){
//         return a-b;
//     },
//     mult(a,b){
//         return a*b;
//     }
// };


// 


// try{
//     console.log(a);
// } catch(err){
//     console.log("variable not defined");
//     console.log(err);
// }


// const sum = (a,b) => {
//     console.log(a+b);
// }

// const sum =(a,b) => {console.log(a+b)};

// const square = (a) => a*a;
//     console.log(square(5));

// const square = (a) =>{
//     return a*a;
// }


// const sum = (a,b) =>(
//     a+b
// );

// console.log("Hi there!");

// setTimeout( () => {
//     console.log("Apna college");
// }, 4000);

// console.log("Welcome to");

// setInterval (() =>{
//     console.log("Apna college");
// },2000);

// clearInterval();

// let id = setInterval(() =>{
//     console.log("hello");
// },2000);
// console.log(id);


// let a = 20;
// let b = 30;
// console.log(a+b);

// console.log(a-b);
// console.log(a*b);

// let num = [1,2,3,4];
// let double = num.map((el) => {
//     return el * 2;
// });

// let nums = [1,2,3,4,5,6,7,8,9];
// let ans = nums.filter((el) => {
//     return el % 2 == 0;
// });
// console.log(ans);


// let num = [1,2,3,4];
// let ans = num.map((el) =>{
//     return el * 2;
// });
// console.log(ans);


// let num = [1,2,3,4,5];
// let ans = num.filter((el) =>{
//     return el % 2 != 0;
// });
// console.log(ans);

// let nums = [1,3,5,7,9];
// let ans = nums.every((el) => {
//     return el % 2 != 0;
// });
// console.log(ans);

// let nums = [1,9,3,5];
// let ans = nums.some((el) => {
//     return el % 2 == 0;
// });
// console.log(ans); 


// let arr = [1,0,2,3,4,5];
// let result = arr.reduce((min,el) => {
//     if(el < min){
//         return el;
//     } else {
//         return min;
//     }
// });
// console.log(result);


// let arr = [20,30,40,50];
// let ans = arr.every((el) => {
//     return el % 10 == 0;
// });
// console.log(ans);

// function getMin(nums) {
//     let min = nums.reduce((min,el) => {
//         if(min < el){
//             return min;
//         } else {
//             return el;
//         }
//     });
//     console.log(min);
// }

// let nums = [-1,2,3,4,5];
// getMin(nums);