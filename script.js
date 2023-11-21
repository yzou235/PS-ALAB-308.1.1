// Part 1: Math Problems

// The initial numbers that must be verified.
const n1 = 10;
const n2 = 15;
const n3 = 20;
const n4 = 5;

// Task 1: check if all numbers are divisible by 5
const allDivisibleBy5 = (n1%5===0) && (n2%5===0) && (n3%5===0) &&(n4%5===0);
console.log(`All numbers are divisible by 5: ${allDivisibleBy5}.`);

// Task 2: if the first is larger than the last
const isFirstLargerThanLast = n1 > n4;
console.log(`The first number is larger thant the last: ${isFirstLargerThanLast}.`);

// Task 3: arithmetic chain
/* Subtract the first number from the second number.
 * Multiply the result by the third number.
 * Find the remainder of dividing the result by the fourth number. */
const result = (n2-n1)*n3 % n4;
console.log(`The result of this arithmetic chain is: ${result}.`);

// Task 4: Change the way that isOver25 calculates so that we do not need to use the NOT operator (!) in other logic comparisons. Rename the variable as appropriate.
const isOver25 = result > 25;
console.log(`The result is over 25: ${isOver25}.`);


