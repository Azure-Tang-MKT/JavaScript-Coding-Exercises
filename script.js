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

/* Question 3. Create a function that takes one string as argument and capticalize the letter of each word in the string and return the whole string.
	transformString(‘canadian tire’’) -> Canadian Tire
	transformString(‘canada post’’) -> Canada Post */

function transformString(string) {
  const newWord = string
    .split(' ')
    .map(word => word[0].toUpperCase() + word.slice(1));
  return newWord.join(' ');
}
console.log(transformString('canadian tire'));
console.log(transformString('canada post'));

/* Question 4: Given a string, create a function to reverse the case. All lower-cased letters should be upper-cased, and vice versa.
reverseCase("Happy Birthday") ➞ "hAPPY bIRTHDAY"
reverseCase("MANY THANKS") ➞ "many thanks"
reverseCase("sPoNtAnEoUs") ➞ "SpOnTaNeOuS" */

const letterConversion = X =>
  X === X.toLowerCase() ? X.toUpperCase() : X.toLowerCase();

function reverseCase(string) {
  const letters = string.split('');
  return letters.map(letterConversion).join('');
  // letters.forEach(functionX);
  // return letters.join('');
}

console.log(reverseCase('Happy Birthday!'));
console.log(reverseCase('MANY THANKS'));
console.log(reverseCase('"sPoNtAnEoUs'));

/* Question 5. Create a function that takes two strings as arguments and returns the number of times the first string (the single character) is found in the second string.

charCount("a", "edabit") ➞ 1
charCount("c", "Chamber of secrets") ➞ 1
charCount("b", "big fat bubble") ➞ 4 */

const charCount = (a, b) => {
  const newReg = new RegExp(a, 'g');
  console.log(b.match(newReg).length);
};
charCount('a', 'edabit');
charCount('c', 'Chamber of secrets');
charCount('b', 'big fat bubble');

/* Question 6: Create a function to return the amount of potatoes there are in a string.
potatoes("potato") ➞ 1
potatoes("potatopotato") ➞ 2
potatoes("potatoapple") ➞ 1
*/

const potatos = string => {
  console.log(string.match(/potato/g).length);
};

potatos('potato');
potatos('potatopotato');
potatos('potatoapple');

/* 7. Create a recursive function that takes two parameters and repeats the string n number of times. The first parameter txt is the string to be repeated and the second parameter is the number of times the string is to be repeated.
repetition("ab", 3) ➞ "ababab"
repetition("kiwi", 1) ➞ "kiwi"
repetition("cherry", 2) ➞ "cherrycherry" */

const repitition = function (word, number) {
  console.log(word.repeat(number));
};

repitition('ab', 3);
repitition('kiwi', 1);
repitition('cherry', 2);

/* Question 8. Create a function that takes a string and returns a string in which each character is repeated once.
doubleChar("String") ➞ "SSttrriinngg"
doubleChar("Hello World!") ➞ "HHeelllloo  WWoorrlldd!!"
doubleChar("1234!_ ") ➞ "11223344!!__  " */

const doubleChar = string => {
  const letterArray = string.split('');
  // console.log(letterArray);
  const doubleLetters = letterArray.map(element => element.repeat(2));
  return doubleLetters.join('');
};
console.log(doubleChar('String'));
console.log(doubleChar('Hello World!'));
console.log(doubleChar('1234!_ '));
