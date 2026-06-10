let arr = [1,2,3,4,5];
function print(el){
    console.log(el);
}
arr.forEach(print);

arr.forEach(function(el){
    console.log(el);
});

//output -> 1 2 3 4 5



//using arrow function :

let arr2 = [1,2,3,4,5];
arr.forEach((el) =>{
    console.log(el);
})

//output -> 1 2 3 4 5


//another example

let students = [
    {
        name : "jayanta",
        age : 23,
        marks : 98,
    },
    {
        name : "rohit",
        age : 22,
        marks : 90,
    },
    {
        name : "virat",
        age : 24,
        marks : 98,
    },
];
students.forEach((student) => {
    console.log(student);
});


//output ->  { name: 'jayanta', age: 23, marks: 98 }
// { name: 'rohit', age: 22, marks: 90 }
// { name: 'virat', age: 24, marks: 98 }