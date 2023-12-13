// Task2
function fibonacci(n) {
    if (n <= 1){
        return n
    } else {
        return fibonacci(n - 1) + fibonacci(n - 2);
    }
}


let num = 12
const fibNumber = fibonacci(num);
console.log(`Число Фібоначчі з номером ${num}: ${fibNumber}`);

// Task3
function filter(handler, arr) {
     const result = [];

     for (let i = 0; i < arr.length; i++) {
         if (handler(arr[i])) {
             result.push(arr[i]);
         }
     }

     return result;
}

let list = [22, 12, 43, 23, 7, 17, 123, 76, 1, 3, 26, 33, 11, 100];
const filteredList = filter((a) => a % 2, list);

// console.log(list)
// console.log(filteredList);

// Task4
// function pow(base, exponent) {
//     return math.pow(base, exponent);
// }

// const result = pow(2, 3);
// // console.log(result);

// const negativeResult = pow(2, -3);
// console.log(negativeResult);

// Task5
function pow_1(List, exp) {
    if (exp === 0) {
        return 1;
    } else if (exp > 0) {
        let result = List.map(base => {
            let currentResult = base;

            for (let i = 1; i < exp; i++) {
                currentResult *= base;
            }

            return currentResult;
        });

        return result;
    } else {
        return "Exponent should be a no negative integer.";
    }
}

const lst_numbers = [
    2, 3, 
    4, 5, 
    6, 7, 
    8, 9, 
];
const resul = pow_1(lst_numbers, 2);
// console.log(resul);

// Task6
function powAndFilter(numbers, exponent, minValue) {
    const poweredNumbers = powList(numbers, exponent);
    const filteredNumbers = filter(num => num >= minValue, poweredNumbers);
    return filteredNumbers;
}

function filter(handler, arr) {
    const result = [];

    for (let i = 0; i < arr.length; i++) {
        if (handler(arr[i])) {
            result.push(arr[i]);
        }
    }

    return result;
}

function powList(baseList, exponent) {
    return baseList.map(base => {
        let currentResult = base;

        for (let i = 1; i < exponent; i++) {
            currentResult *= base;
        }

        return currentResult;
    });
}

const numbers = [    
    2, 3, 
    4, 5, 
    6, 7, 
    8, 9 
];
const exponent = 2;
const minValue = 10;

// const result = powAndFilter(numbers, exponent, minValue);
// console.log(result);


// Task7
function sum(handler) {
    return function calc() {    
        const numbers = handler();
        const totalSum = numbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
        return totalSum;
    };
}

const handler = () => [1, 2, 3];
const calc = sum(handler);

const result = calc();
// console.log(result);