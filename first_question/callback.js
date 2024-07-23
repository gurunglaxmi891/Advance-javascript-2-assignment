// 1. Find the sum of first 4 natural numbers using callback functions and promises (also with async/await)


// using callback function

function sum(n,callback){
    let sum = 0; 
    for (let i = 1; i <= n; i++) 
        sum = sum + i; 
    callback(sum)
}
function displaySum(total){
    console.log("The sum is ",total)
}
sum(4,displaySum);


