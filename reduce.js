// reduce method -> reduce the array to a single value

let nums = [1,2,3,4,5];
let ans = nums.reduce((res,el) => {
    return res + el;
});
console.log(ans);


//output -> 15 



// Q. find maximum in an array using reduce

let arr = [1,2,3,4,5,6,7,8,9];

let result = arr.reduce((max,el) => {
    if(el > max){
        return el;
    } else {
        return max;
    }
});
console.log(result);

//output -> 9
