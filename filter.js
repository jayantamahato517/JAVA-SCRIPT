let nums = [1,2,3,4,5];
let ans = nums.filter((el) => {
    return el % 2 == 0;
});
console.log(ans);

//output -> [2,4] return only even numbers