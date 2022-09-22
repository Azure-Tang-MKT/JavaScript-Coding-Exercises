'use strict';

/* Question 1: Create a function that takes one string as argument and returns a string which has no white space.

removeSpace(‘Hello world!’) -> ‘Helloworld!’
removeSpace(‘This is JavaScript and HTML’) ->‘ThisisJavaScripandHTML’
removeSpace(‘IaminCanada’) -> ‘‘IaminCanada’ */

const removeSpace = function (str) {
  return str.includes(' ') ? str.replaceAll(' ', '') : str;
};

console.log(removeSpace('Hello world!'));
console.log(removeSpace('This is JavaScript and HTML'));
console.log(removeSpace('IaminCanada'));

/* Question 2: Create a function that takes one string as argument and returns the letter at position 3 from the argument.

findLetter(‘Hello world!’) -> ‘l’
findLetter(‘This is JavaScript and HTML’) ->í ‘s’
findLetter(‘IaminCanada’) -> ‘i’ */

const findLetter = string => string.charAt(3);
console.log(findLetter('Hello world!'));
console.log(findLetter('This is JavaScript and HTML'));
console.log(findLetter('IaminCanada'));

// Create a function that takes one string as argument and capticalize the letter of each word in the string and return the whole string.
// 	transformString(‘canadian tire’’) -> Canadian Tire
// 	transformString(‘canada post’’) -> Canada Post

function transformString(string) {
  const newWord = string
    .split(' ')
    .map(word => word[0].toUpperCase() + word.slice(1));
  return newWord.join(' ');
}
console.log(transformString('canadian tire'));
console.log(transformString('canada post'));

/*
// Given a string, create a function to reverse the case. All lower-cased letters should be upper-cased, and vice versa.
// reverseCase("Happy Birthday") ➞ "hAPPY bIRTHDAY"
// reverseCase("MANY THANKS") ➞ "many thanks"
// reverseCase("sPoNtAnEoUs") ➞ "SpOnTaNeOuS"

const functionX = X =>
  X === X.toLowerCase() ? X.toUpperCase() : X.toLowerCase();

function reverseCase(string) {
  const letters = string.split('');
  return letters.map(functionX).join('');
  // letters.forEach(functionX);
  // return letters.join('');
}

console.log(reverseCase('Happy Birthday!'));
console.log(reverseCase('MANY THANKS'));
console.log(reverseCase('"sPoNtAnEoUs'));


*/

// Create a function that takes two strings as arguments and returns the number of times the first string (the single character) is found in the second string.

// charCount("a", "edabit") ➞ 1
// charCount("c", "Chamber of secrets") ➞ 1
// charCount("b", "big fat bubble") ➞ 4

const charCount = (a, b) => {
  const newReg = new RegExp(b, 'g');
  console.log(a.match(newReg).length);
};
charCount('Christmasss', 's');

// 7. Create a recursive function that takes two parameters and repeats the string n number of times. The first parameter txt is the string to be repeated and the second parameter is the number of times the string is to be repeated.
// repetition("ab", 3) ➞ "ababab"
// repetition("kiwi", 1) ➞ "kiwi"
// repetition("cherry", 2) ➞ "cherrycherry"

const repitition = function (word, number) {
  console.log(word.repeat(number));
};

repitition('ab', 3);
repitition('kiwi', 1);
repitition('cherry', 2);

const doubleChar = string => {
  const letterSingle = string.split('');
  console.log(letterSingle);
  const doubleLetters = letterSingle.map(element => element.repeat(2));
  return doubleLetters.join('');
};
console.log(doubleChar('Hello World!'));

命名; //newArr
