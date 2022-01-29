const readline = require('readline-sync');

console.log('Welcome to FizzBuzz!\nWhat number do you want to count to?')
const maxNum = readline.prompt()

const isDivisibleBy = (num, div) => {
    return (num % div === 0);
}

const startsWithB = (word) => {
    word.startsWith('B');     
};

for (let i = 1; i <= maxNum; i++) {
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
        result = ['Bong']; //clear existing array and replace with 'Bong'
    }
    if (isDivisibleBy(i, 13)) {
        if (result.length === 0) {
            result.push('Fezz');
        } else {
            result.splice(result.findIndex(startsWithB), 0, 'Fezz');
                }
    }
    if (isDivisibleBy(i, 17)){
        result.reverse();
    }
    if (result.length === 0) {
        result.push(i);
    }
    console.log(result.join(''));
};