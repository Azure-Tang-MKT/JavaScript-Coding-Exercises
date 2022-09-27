"use strict";

// Q1: Give two arrays and return a new array with the elements in both arrays.

const arr = ["abc", 23, "a10bc", "bcd"];
const target = ["bcd", 23, "ddd", "huhu"];

const newArray = [...arr, ...target];
console.log(newArray);

// Q2: Create a function that takes an array of non-negative integers and strings and return a new array without the strings.
const filterArray = (inputArray) =>
  inputArray.filter((i) => typeof i !== "string");
console.log(filterArray([1, 2, "a", "b"]));
console.log(filterArray([1, "a", "b", 0, 15]));
console.log(filterArray([1, 2, "aasf", "1", "123", 123]));

// Q2 Method 2:
/* const testArray = [];
const filter2Array = function (inputArray) {
  inputArray.forEach(i => typeof i !== 'string' && testArray.push(i));
  return testArray;
}; */

//Q3:Create a function that receives an array as argument and returns a new array which has no duplicate elements.
const transArr = [];
const transformArr = function (inputArray) {
  inputArray.forEach((i) => (transArr.includes(i) ? i : transArr.push(i)));
  return transArr;
};

console.log(transformArr([1, 2, 2, 3, 3, "a"]));

/* //Q3: method 2
const transformArr2 = inputArray => [...new Set(inputArray)];
console.log(transformArr2([1, 2, 2, 3, 3, 'a']));
 */

// Q4: Create a function that returns the frequency distribution of an array. This function should return an object, where the keys are the unique elements and the values are the frequency in which those elements occur.

const freObject = new Object();
const addFunction = function (el) {
  freObject[el] ? freObject[el]++ : (freObject[el] = 1); // add new object element
};
console.log(freObject);
const getFrequencies = (inputArray) =>
  inputArray.forEach((el) => addFunction(el));
getFrequencies([1, 2, 3, 3, 2]);

//5. Given an array and chunk size "n", Create a function such that it divides the array into many subarrays where each subarray is of length size "n".

const result = [];
const chunk = function (inputArray, indexN) {
  if (inputArray.length > 0) {
    const X = inputArray.splice(indexN);
    result.push(inputArray);
    chunk(X, indexN);
  }
  return result;
};

console.log(chunk([1, 2, 3, 4], 2));
// chunk([1, 2, 3, 4, 5, 6, 7], 3);
// chunk([1, 2, 3, 4, 5], 10);

/* //Q5 method 2:
const chunk2 = function (inputArray, indexN) {
  for (i = 0; i < inputArray.length; i += indexN) {
    result.push(inputArray.slice(i, i + indexN));
  }
  return result;
}; */

// Q6: Create a function that receives an array contains a series of number as elements and returns the biggest number
// let max = 0;
const getMax = function (inputArray) {
  return inputArray.reduce((acc, cur) => {
    if (acc < cur) {
      return cur;
    } else {
      return acc;
    }
  });
};
console.log(getMax([1, 2, 3, 4, 5]));

/* //Q6-method 2
const getMax2 = inputArray => Math.max(...inputArray);
console.log(getMax2([1, 2, 3, 4, 5])); */

// Q7: Create a function that returns true if the first array can be nested inside the second and false otherwise.

const canNest = function (array1, array2) {
  return (
    Math.max(...array1) < Math.max(...array2) &&
    Math.min(...array1) > Math.min(...array2)
  );
};

console.log(canNest([1, 2, 3, 4], [0, 6]));
// console.log(canNest([3, 1], [4, 0]));
// console.log(canNest([9, 9, 8], [8, 9]));
// console.log(canNest([1, 2, 3, 4], [2, 3]));

/* //Q7- method 2
const maxF = function (givenArray) {
  return givenArray.reduce((acc, cur) => {
    return acc > cur ? acc : cur; 
  });
};

const minF = function (givenArray) {
  return givenArray.reduce((acc, cur) => {
    return acc < cur ? acc : cur;
  });
};
const canNest2 = function (array1, array2) {
  return maxF(array1) < maxF(array2) && minF(array1) > minF(array2);
};
console.log(canNest2([1, 2, 3, 4], [0, 6])); */

//Q8. Create a function that returns an array of strings sorted by length in ascending order.

const sortByLength = function (inputArray) {
  return inputArray.sort((a, b) => a.length - b.length);
};

console.log(sortByLength(["a", "ccc", "dddd", "bb"]));
console.log(sortByLength(["apple", "pie", "shortcake"]));
