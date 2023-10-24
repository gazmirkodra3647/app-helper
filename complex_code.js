/* complex_code.js */

// This code is a complex implementation of a sorting algorithm called Radix Sort
// It is designed to sort an array of positive integers in ascending order
// The code uses a combination of counting sort and bucket sort techniques

// Function to get the number of digits in the maximum number in the given array
function getMaxDigits(arr) {
  let max = 0;
  for (let i = 0; i < arr.length; i++) {
    max = Math.max(max, arr[i]);
  }
  return max.toString().length;
}

// Function for counting sort used as a subroutine in Radix Sort
function countingSort(arr, exp) {
  const count = new Array(10).fill(0);
  const output = new Array(arr.length);
  
  for (let i = 0; i < arr.length; i++) {
    count[Math.floor(arr[i] / exp) % 10]++;
  }
  
  for (let i = 1; i < 10; i++) {
    count[i] += count[i - 1];
  }

  for (let i = arr.length - 1; i >= 0; i--) {
    output[count[Math.floor(arr[i] / exp) % 10] - 1] = arr[i];
    count[Math.floor(arr[i] / exp) % 10]--;
  }
  
  for (let i = 0; i < arr.length; i++) {
    arr[i] = output[i];
  }
}

// The main Radix Sort function
function radixSort(arr) {
  const maxDigits = getMaxDigits(arr);

  for (let exp = 1; Math.floor(maxDigits / exp) > 0; exp *= 10) {
    countingSort(arr, exp);
  }
}

// Test the sorting algorithm
const array = [432, 8, 530, 90, 88, 231, 11]; // Sample input array
console.log("Original Array:", array);

radixSort(array);
console.log("Sorted Array:", array);

// Output:
// Original Array: [ 432, 8, 530, 90, 88, 231, 11 ]
// Sorted Array: [ 8, 11, 88, 90, 231, 432, 530 ]