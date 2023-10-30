// File: complexCode.js
// Content: Complex Code Example

// Determine if a number is prime
function isPrime(number) {
    if (number <= 1) {
        return false;
    }
    if (number <= 3) {
        return true;
    }
    if (number % 2 === 0 || number % 3 === 0) {
        return false;
    }

    let i = 5;
    while (i * i <= number) {
        if (number % i === 0 || number % (i + 2) === 0) {
            return false;
        }
        i += 6;
    }

    return true;
}

// Generate Fibonacci sequence up to the given limit
function generateFibonacciSequence(limit) {
    let sequence = [0, 1];

    let a = 0;
    let b = 1;
    let c = a + b;

    while (c <= limit) {
        sequence.push(c);
        a = b;
        b = c;
        c = a + b;
    }

    return sequence;
}

// Custom sorting algorithm
function customSort(array) {
    let length = array.length;
    let temp;

    for (let i = 0; i < length - 1; i++) {
        for (let j = 0; j < length - i - 1; j++) {
            if (array[j] > array[j + 1]) {
                temp = array[j];
                array[j] = array[j + 1];
                array[j + 1] = temp;
            }
        }
    }

    return array;
}

// Start of the program
console.log("Complex Code Example");

// Generate Fibonacci sequence up to 100
let fibonacciSequence = generateFibonacciSequence(100);
console.log("Fibonacci Sequence:", fibonacciSequence);

// Check if numbers in the sequence are prime
console.log("Prime Numbers in the Fibonacci Sequence:");
for (let i = 0; i < fibonacciSequence.length; i++) {
    let number = fibonacciSequence[i];
    if (isPrime(number)) {
        console.log(number);
    }
}

// Sort the Fibonacci sequence in ascending order
let sortedSequence = customSort(fibonacciSequence);
console.log("Sorted Sequence:", sortedSequence);

// Perform a complex computation
let result = 2 * 3 + (4 - 5) / 6 % 7;
console.log("Result of Complex Computation:", result);

// End of the program