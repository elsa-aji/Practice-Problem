// 1. Loop to print numbers from 1 to 10
console.log("--- Question 1 ---");
for (let i = 1; i <= 10; i++) {
  console.log(i);
}

// 2. Function to return the sum of an array
console.log("\n--- Question 2 ---");
function sumArray(numbers) {
  return numbers.reduce((sum, num) => sum + num, 0);
}
console.log("Sum [1, 2, 3]:", sumArray([1, 2, 3]));

// 3. Function to find the largest number in an array
console.log("\n--- Question 3 ---");
function findLargest(numbers) {
  return Math.max(...numbers);
}
console.log("Largest [5, 12, 3, 9]:", findLargest([5, 12, 3, 9]));

// 4. Function to check if a number is even or odd
console.log("\n--- Question 4 ---");
function checkEvenOdd(num) {
  return num % 2 === 0 ? "Even" : "Odd";
}
console.log("4 is:", checkEvenOdd(4));
console.log("7 is:", checkEvenOdd(7));

// 5. Function to reverse a string
console.log("\n--- Question 5 ---");
function reverseString(str) {
  return str.split('').reverse().join('');
}
console.log("Reverse 'hello':", reverseString('hello'));

// 6. Merge two arrays using the spread operator
console.log("\n--- Question 6 ---");
const a = [1, 2];
const b = [3, 4];
const result = [...a, ...b]; 
console.log("Merged:", result);

// 7. Filter even numbers using ES6 filter
console.log("\n--- Question 7 ---");
const numbers = [1, 2, 3, 4, 5, 6];
const evenNumbers = numbers.filter(num => num % 2 === 0);
console.log("Evens:", evenNumbers);

// 8. Rewrite using template literals
console.log("\n--- Question 8 ---");
const name = "Alice";
const msg = `Hello ${name}, welcome!`;
console.log(msg);

// 9. Rewrite using an arrow function
console.log("\n--- Question 9 ---");
const greet = (name) => "Hello, " + name;
console.log(greet("Bob"));
