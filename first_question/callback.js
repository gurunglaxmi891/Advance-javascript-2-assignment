// 1. Find the sum of first 4 natural numbers using callback functions and promises (also with async/await)


// using callback function

function sumOfFirstFour(callback) {
    let sum = 0;
    for (let i = 1; i <= 4; i++) {
        sum += i;
    }
    return sum
}

console.log("The sum of first four numbers is ",sumOfFirstFour())



