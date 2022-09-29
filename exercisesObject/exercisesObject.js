"use strict";
// Q1: Given three arguments ⁠— an object obj of the stolen items, the pets name and a value ⁠— return an object with that name and value in it (as key-value pairs).
let objectResult;
const addName = function (a, b, c) {
  objectResult = a;
  objectResult[b] = c;
  return objectResult;
};
console.log(addName({}, "Brutus", 300));
console.log(addName({ piano: 500 }, "Brutus", 400));
console.log(addName({ piano: 500, stereo: 300 }, "Caligula", 440));

//Q2: Create a function that takes an object and returns the keys and values as separate arrays. Return the keys sorted alphabetically, and their corresponding values in the same order.

let indexObject;
let valueOvject;
const KeyAndValues = function (inputObject) {
  indexObject = Object.entries(inputObject)
    .sort()
    .map((x) => (x = x[0]));
  valueOvject = Object.entries(inputObject)
    .sort()
    .map((x) => (x = x[1]));
  return [indexObject, valueOvject];
};

console.log(KeyAndValues({ a: 1, b: 2, c: 3 }));
console.log(KeyAndValues({ a: "Apple", b: "Microsoft", c: "Google" }));

//Q3: Create a function that determines whether a shopping order is eligible for free shipping. An order is eligible for free shipping if the total cost of items purchased exceeds $50.00.
let sum;
const freeShipping = function (givenObject) {
  sum = Object.values(givenObject).reduce((acc, cur) => acc + cur);
  return sum > 50;
};

console.log(freeShipping({ "Flatscreen TV": 399.99 }));
console.log(
  freeShipping({ Monopoly: 11.99, "Secret Hitler": 35.99, Bananagrams: 13.99 })
);

//Q4. Write a function that creates an object with each (key, value) pair being the (lower case, upper case) versions of a letter, respectively .

const mapping = (arr) => {
  return arr.reduce((acc, item) => ((acc[item] = item.toUpperCase()), acc), {});
};
console.log(mapping(["a", "b", "c", "c"]));
console.log(mapping(["a", "v", "y", "z"]));

//Q5. Given an object of people and their ages, return how old the people would be after n years have passed. Use the absolute value of n.
const afterNYears = function (givenObjects, N) {
  return Object.values(givenObjects).map((el) => el + N);
};
console.log(
  afterNYears({ Joel: 32, Fred: 44, Reginald: 65, Susan: 33, Julian: 13 }, 1)
);

const test = { Joel: 32, Fred: 44, Reginald: 65, Susan: 33, Julian: 13 };
console.log(Object.entries(test));
// console.log(Object.entries(test).forEach(value, index)=>{});
const arrName = Object.keys(test);
console.log(arrName);
arrName.forEach((el) => (test[el] = test[el] + 1));
console.log(test);

//Q6. Given an Object contains all soccer players name and the time they played. Write two functions to implement the below questions: Question1: To calculate the average played time of all players. Question2: To find out the players who’s time is over the average time and returns an object with the same format as the players object
const players = {
  harry: { time: 102 },
  heungmin: { time: 115 },
  dele: { time: 51 },
  christian: { time: 57 },
  hugo: { time: 98 },
};

//get average
const playersAvg = function (players) {
  return Object.values(players).reduce(
    (acc, cur) =>
      acc + Number(Object.values(cur)) / Object.values(players).length,
    0
  );
};
playersAvg(players);
const avgNumber = playersAvg(players);
console.log(avgNumber);

let aboveAvgFinal = {};

//get players above avg
const playersNameArray = Object.keys(players);
const aboveAvg = function (givenplayers) {
  Object.keys(givenplayers).forEach((i) => {
    if (players[i].time > avgNumber) {
      aboveAvgFinal[i] = players[i];
    }
  });
  return aboveAvgFinal;
};

console.log(aboveAvg(players));

// const aboveAverage = function(players){players.forEach(i=>players[i].time>avgNumber?)}
/* Avg method2: 
const avgTime = players => {
  return (
    Object.values(players).reduce((acc, item) => acc + item.time, 0) /
    Object.values(players).length
  );
}; */

/* 7. Create a function that takes a string of name and checks how much good is the given name. A preloaded dictionary of alphabet scores is available in the Code tab. Add up the letters of your name to get the total score .
Return your result as per the following rules: score <= 60: "NOT TOO GOOD" 61 <= score <= 300: "PRETTY GOOD" 301 <= score <= 599: "VERY GOOD"score >= 600: "THE BEST" */

const scores = {
  A: 100,
  B: 14,
  C: 9,
  D: 28,
  E: 145,
  F: 12,
  G: 3,
  H: 10,
  I: 200,
  J: 100,
  K: 114,
  L: 100,
  M: 25,
  N: 450,
  O: 80,
  P: 2,
  Q: 12,
  R: 400,
  S: 113,
  T: 405,
  U: 11,
  V: 10,
  W: 10,
  X: 3,
  Y: 210,
  Z: 23,
};

let scoreSum;
const nameScore = function (givenName) {
  scoreSum = givenName.split("").reduce((acc, cur) => acc + scores[cur], 0);
  console.log(scoreSum);
  if (scoreSum < 60) {
    return console.log("NOT TOO GOOD");
  } else if (61 <= scoreSum && scoreSum <= 300) {
    return console.log("PRETTY GOOD");
  } else if (301 <= scoreSum && scoreSum <= 599) {
    return console.log("VERY GOOD");
  } else {
    return console.log("THE BEST");
  }
};
nameScore("MUBASHIR");
nameScore("YOU");
nameScore("MATT");
nameScore("PUBG");

// 8. Write a function that receives the following object and returns a new object.
const inputItmes = [
  { name: "Jack", pets: ["cat"] },
  { name: "Jill", pets: ["dog", "cat"] },
  { name: "Sally", pets: ["cat", "fish"] },
];
/* 
transFormObj(inputItmes); 
// { cat: ["Jack", "Jill", "Sally"], dog: ["Jill"], fish: ["Sally"] } */

const endObjects = { cat: [], dog: [], fish: [] };

const transFormObj = function (givenItemsArray) {
  givenItemsArray.forEach((i) =>
    i.pets.forEach((el) => {
      endObjects[el] = [...endObjects[el], i.name];
    })
  );
  return endObjects;
};

console.log(transFormObj(inputItmes));
