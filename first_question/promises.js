// using promises

function sum(a, b) {
    return new Promise((resolve) => {
        resolve(a + b);
    });
}

function sumOfFirstFour() {
    return sum(1, 2)
        .then(result => sum(result, 3))
        .then(result => sum(result, 4));
}

sumOfFirstFour().then(result => {
    console.log("The sum of the first four natural numbers is:", result);
});