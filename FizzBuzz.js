const readline = require('readline-sync');

console.log('Welcome to FizzBuzz!\nWhat number do you want to count to?')
const maxNum = readline.prompt()

let userArray = [];
function getRulesFromUser() {
    console.log('Do you want to change a number? Enter Y / N')
    let response = readline.prompt();
    while (response === 'Y') {
        console.log('What number do you want to change?')
        userArray.push(readline.prompt());
        console.log('Do you want to change another number? Y / N')
        response = readline.prompt();
    }
    return userArray;
}
getRulesFromUser();
console.log(userArray);

const isDivisibleBy = (num, div) => {
    return (num % div === 0);
}

const startsWithB = (word) => {
    word.startsWith('B');     
};

for (let i = 1; i <= maxNum; i++) {
    let result = [];
    for (let j = 0; j < userArray.length; j++) {
        if (i % userArray[j] === 0) {

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
            } { break; }
        }
    }
    if (result.length === 0) {
        result.push(i);
    }
    console.log(result.join(''));
};