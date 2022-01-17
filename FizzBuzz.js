for (let i = 1; i <= 100; i++) {
    let fizz = 'Fizz';
    let buzz = 'Buzz';
    
    i % 3 === 0 && i % 5 === 0 ? console.log(fizz + buzz)
    : i % 3 === 0 ? console.log(fizz)
    : i % 5 === 0 ? console.log(buzz) : console.log(i);
};