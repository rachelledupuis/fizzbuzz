const isDivisibleBy = (num, div) => {
    return (num % div === 0);
}

for (let i = 1; i <= 100; i++) {
    let result = '';

    if (isDivisibleBy(i, 3)) {
        result += 'Fizz';
    }
    if (isDivisibleBy(i, 5)) {
        result += 'Buzz';
    }
    if(isDivisibleBy(i, 7)) {
        result += 'Bang';
    }
    if (result === '') {
        result = i;
    }
    console.log(result);
};