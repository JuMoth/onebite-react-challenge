// Quiz 1.

let max = 0;

const x = 15;
const y = 20;

max = x > y ? x : y;

console.log(max);

// Quiz 2.

const a = true;

if(typeof a === 'number') {
    console.log('숫자');
} else if(typeof a === 'string') {
    console.log('문자열');
} else if(typeof a === 'boolean') {
    console.log('불리언');
} else {
    console.log('타입이 잘못 지정되었습니다.');
}

// Quiz 3.

let temperature = 10;

if(temperature < 0) {
    console.log("매우 추움");
} else if(temperature >= 0 || temperature < 10) {
    console.log("추움");
} else if(temperature > 10 || temperature < 20) {
    console.log("적당");
} else {
    console.log("더움");
}