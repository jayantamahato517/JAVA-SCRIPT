//every method

let nums = [1,2,3,4];
let ans = nums.every((el) => {
    return el % 2 == 0;
});
console.log(ans);

// output -> false , because all nums are not even number
//if all nums are even the it will be return true
//similar to logical AND -> all true then true if one false then overall false



//some method   -> similar to logical OR

let nums2 = [1,2,3,4,5];
let ans2 = nums2.some((el) => {
    return el % 2 == 0;
});
console.log(ans2);

//output -> true , because is one is true then overall is true.