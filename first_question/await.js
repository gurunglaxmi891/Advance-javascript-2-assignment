// await

function add(a, b) {
    return new Promise((resolve) => {
        resolve(a + b);
    });
}

async function sumFirstFour() {
    let sum = 0;
    sum = await add(sum, 1);
    sum = await add(sum, 2);
    sum = await add(sum, 3);
    sum = await add(sum, 4);
    return sum;
}

sumFirstFour().then(result => {
    console.log(`The sum of the first four natural numbers is: ${result}`);
});