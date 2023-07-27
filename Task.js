// Task 1 : Create a function that takes a string as input and returns the reversed version of the string without using the built-in reverse() method.

function reverseString(str) {
  let reversed = "";
  for (let i = str.length - 1; i >= 0; i--) {
    reversed += str.charAt(i);
  }
  return reversed;
}
const inputString = "hello, world";
const reversedString = reverseString(inputString);
console.log(reversedString);

// Task 2 : Create a function that takes an array of numbers as input and returns the sum of all positive numbers in the array.

function sumPositiveNumbers(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 0) {
      sum += arr[i];
    }
  }
  return sum;
}

const numbers1 = [2, -5, 10, -3, 7];
const positiveSum = sumPositiveNumbers(numbers1);
console.log(positiveSum);

// Task 3: Write a JavaScript program to find the most frequent element in an array and return it.
function findMostFrequentElement(arr) {
  if (arr.length === 0) {
    return null;
  }

  const frequencyMap = new Map();
  let maxFrequency = 0;
  let mostFrequentElement;

  for (const num of arr) {
    const currentFrequency = (frequencyMap.get(num) || 0) + 1;
    frequencyMap.set(num, currentFrequency);

    if (currentFrequency > maxFrequency) {
      maxFrequency = currentFrequency;
      mostFrequentElement = num;
    }
  }

  return mostFrequentElement;
}
const numbers2 = [3, 5, 2, 5, 3, 3, 1, 4, 5];
const mostFrequent = findMostFrequentElement(numbers2);
console.log(mostFrequent);

// Task 4: Create a function that takes a sorted array of numbers and a target value as input. The function should find two numbers in the array that add up to the target value. Return an array containing the indices of the two numbers.
function findTwoNumbersWithSum(arr, target) {
  let left = 0;
  let right = arr.length - 1;

  while (left < right) {
    const sum = arr[left] + arr[right];
    if (sum === target) {
      return [left, right];
    } else if (sum < target) {
      left++;
    } else {
      right--;
    }
  }

  return null;
}
const sortedArray = [1, 3, 6, 8, 11, 15];
const targetValue = 9;
const result1 = findTwoNumbersWithSum(sortedArray, targetValue);
console.log(result1);

// Task 5: Implement a simple JavaScript calculator. The calculator should take two numbers and an operator (+, -, *, /) as input and return the result of the operation.

function calculate(num1, operator, num2) {
  switch (operator) {
    case "+":
      return num1 + num2;
    case "-":
      return num1 - num2;
    case "*":
      return num1 * num2;
    case "/":
      if (num2 === 0) {
        return "Error: Cannot divide by zero";
      }
      return num1 / num2;
    default:
      return "Error: Invalid operator";
  }
}
const num1 = 10;
const num2 = 5;
const operator = "+";
const result = calculate(num1, operator, num2);
console.log(result);

const result2 = calculate(8, "*", 4);
console.log(result2);

const result3 = calculate(15, "/", 0);
console.log(result3);

// Task 6: Create a program that generates a random password of a specified length. The password should include a mix of uppercase letters, lowercase letters, numbers, and special characters.

function generateRandomPassword(length) {
  const uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
  const numberChars = "0123456789";
  const specialChars = "!@#$%^&*()_+-=[]{}|;:,.<>?";

  const allChars = uppercaseChars + lowercaseChars + numberChars + specialChars;
  let password = "";

  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * allChars.length);
    password += allChars.charAt(randomIndex);
  }

  return password;
}
const passwordLength = 12;
const randomPassword = generateRandomPassword(passwordLength);
console.log(randomPassword);

// Task 7: Implement a function that converts a Roman numeral to an integer. The function should take a Roman numeral string (e.g., "IX" or "XXI") as input and return the corresponding integer value.
function romanToInteger(romanNumeral) {
  const romanNumeralsMap = new Map([
    ["I", 1],
    ["V", 5],
    ["X", 10],
    ["L", 50],
    ["C", 100],
    ["D", 500],
    ["M", 1000],
  ]);

  let result = 0;

  for (let i = 0; i < romanNumeral.length; i++) {
    const currentSymbolValue = romanNumeralsMap.get(romanNumeral[i]);
    const nextSymbolValue = romanNumeralsMap.get(romanNumeral[i + 1]);

    if (nextSymbolValue > currentSymbolValue) {
      result += nextSymbolValue - currentSymbolValue;
      i++;
    } else {
      result += currentSymbolValue;
    }
  }

  return result;
}
console.log(romanToInteger("III"));
console.log(romanToInteger("IX"));
console.log(romanToInteger("XXI"));
console.log(romanToInteger("XLV"));
console.log(romanToInteger("CMXCIX"));
console.log(romanToInteger("MMXXI"));

// Task 8: Implement a JavaScript function to find the second smallest element in an array of numbers. The function should return the second smallest number.

function findSecondSmallest(arr) {
  if (arr.length < 2) {
    return "Error: Array should contain at least two elements";
  }

  let smallest = Infinity;
  let secondSmallest = Infinity;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < smallest) {
      secondSmallest = smallest;
      smallest = arr[i];
    } else if (arr[i] < secondSmallest && arr[i] !== smallest) {
      secondSmallest = arr[i];
    }
  }

  if (secondSmallest === Infinity) {
    return "Error: There is no second smallest element";
  }

  return secondSmallest;
}
const numbers = [7, 2, 4, 1, 5, 3];
console.log(findSecondSmallest(numbers));
