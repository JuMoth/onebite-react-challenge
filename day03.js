// Quiz 1. 모든 약수찾기

let num = 100;
let answer = [];

for(let i=0; i<num; i++) {
    if(num%i === 0) {
        answer.push(i);
    }
}

console.log(answer);

// Quiz 2. 소수 판별기 (에라토스테네스의 체)

function isPrimeNumber(num) {
    for(let i=2; i<num; i++) {
        if(num%i === 0) {
            return false;
        }
    }
    return true;
}

console.log(isPrimeNumber(1));
console.log(isPrimeNumber(4));
console.log(isPrimeNumber(11));
console.log(isPrimeNumber(12));

// Quiz 3. 계산기 만들기

function add(num1, num2) {
    return num1+num2;
}

function subtract(num1, num2) {
    return num1-num2;
}

function calculate(num1, num2, operation) {
    let answer = operation(num1, num2);
    console.log(answer);
}

calculate(5, 3, add);
calculate(5, 3, subtract);