const isDivisibleBy = (num, div) => {
    return (num % div === 0);
}

for (let i = 1; i <= 100; i++) {
    let result = [];

    if (isDivisibleBy(i, 3)) {
        result.push('Fizz');
    }
    if (isDivisibleBy(i, 5)) {
        result.push('Buzz');
    }
    if(isDivisibleBy(i, 7)) {
        result.push('Bang');
    }
    if(isDivisibleBy(i, 11)) {
        result.splice(0, result.length, 'Bong');
    }
    if (result.length === 0) {
        result.push(i);
    }
    console.log(result.join(''));
};