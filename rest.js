// rest -> allows a function to take an indefinite number of arguments and bundles them in an array
// oposite of spread


// example : 1
function show(...numbers){
    console.log(numbers);
}
show(10,20,30,40);

//output -> [10,20,30,40]



//example : 2
//sum of numbers
function sum(...nums){
    let total = 0;

    for(let i=0;i<nums.length;i++){
        total += nums[i];
    }
    return total;
}
console.log(sum(10,20,30));

//output -> 60