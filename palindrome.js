let num = 121;
let temp = num;
let reverse = 0;

while(temp > 0){
    let digit = temp % 10;
    reverse = reverse * 10 + digit;
    temp = Math.floor(temp / 10);
}
if(num == reverse){
    console.log("Palindrome")
} else {
    console.log("Not palindrome");
}