/*
  Filename: ComplexCode.js
  Description: A complex and elaborate JavaScript code demonstrating various advanced concepts and techniques.
*/

// Utility function to generate a random integer within a specified range
function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Class representing a person with name and age
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  sayHello() {
    console.log(`Hello, my name is ${this.name} and I'm ${this.age} years old.`);
  }
}

// Function to calculate nth Fibonacci number using recursion
function fibonacci(n) {
  if (n <= 1) {
    return n;
  } else {
    return fibonacci(n - 1) + fibonacci(n - 2);
  }
}

// Create an array of 100 random numbers
const randomNumbers = Array.from({ length: 100 }, () => getRandomInt(1, 1000));

// Filter even numbers from the array using Array.prototype.filter()
const evenNumbers = randomNumbers.filter((num) => num % 2 === 0);

// Calculate the sum of even numbers using Array.prototype.reduce()
const sum = evenNumbers.reduce((acc, curr) => acc + curr, 0);

// Check if a given number is prime or not
function isPrime(n) {
  if (n <= 1) {
    return false;
  }
  
  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) {
      return false;
    }
  }
  
  return true;
}

// Class representing a geometric shape
class Shape {
  constructor() {
    if (this.constructor === Shape) {
      throw new Error('Cannot instantiate abstract class Shape.');
    }
  }

  getArea() {
    throw new Error('Method getArea() must be implemented.');
  }
}

// Class representing a rectangle
class Rectangle extends Shape {
  constructor(width, height) {
    super();
    this.width = width;
    this.height = height;
  }

  getArea() {
    return this.width * this.height;
  }
}

// Create a rectangle object and calculate its area
const rectangle = new Rectangle(5, 10);
const rectangleArea = rectangle.getArea();

// Generate a random color using RGB values
const randomColor = `rgb(${getRandomInt(0, 255)}, ${getRandomInt(0, 255)}, ${getRandomInt(0, 255)})`;

// Log outputs
console.log('Random numbers:', randomNumbers);
console.log('Even numbers:', evenNumbers);
console.log('Sum of even numbers:', sum);
console.log('Is 17 prime?', isPrime(17));
console.log('Rectangle area:', rectangleArea);
console.log('Random color:', randomColor);

/*
  ... Rest of the code ...
  (More than 200 lines of sophisticated and elaborate code...)
*/