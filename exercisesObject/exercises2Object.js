"use strict";
// 1. Given an object containing the names and ages of a group of people, return the name of the oldest person.
// Examples
// oldest({
//   Emma: 71,
//   Jack: 45,
//   Amy: 15,
//   Ben: 29
// }) ➞ "Emma"

// oldest({
//   Max: 9,
//   Josh: 13,
//   Sam: 48,
//   Anne: 33
// }) ➞ "Sam"
const getOldest = function (givenObj) {
  return Object.keys(givenObj).reduce((olderAge, el) => {
    return givenObj[el] >= olderAge ? givenObj[el] : olderAge;
  }, givenObj[Object.keys(givenObj)[0]]);
};
console.log(
  getOldest({
    Max: 9,
    Josh: 13,
    Sam: 48,
    Anne: 33,
  })
);

// 2. Given a list of shoes and write a function receives the shoeList as an argument and returns a new list which ordered as color(alphabetically). If two shoes has the same color and then order as the size.

const shoeList = [
  { color: "white", size: 9 },
  { color: "red", size: 8.5 },
  { color: "yellow", size: 10 },
  { color: "blue", size: 11 },
  { color: "white", size: 9.5 },
];

//method1:
const orderedList = shoeList.sort((a, b) =>
  a.color > b.color
    ? 1
    : a.color === b.color
    ? a.size === b.size
      ? 1
      : -1
    : -1
);

console.log(orderedList);

//method2:
const getNewObj = function (givenArray) {
  return givenArray.reduce((newList, el) => {
    newList[`${el.color}${el.size}`] = el;
    return newList;
  }, {});
};

const newObj = getNewObj(shoeList);

const sortedList = Object.keys(newObj)
  .sort()
  .reduce((acc, item) => {
    return [...acc, newObj[item]];
  }, []);

console.log(sortedList);

// Q3: Given an object of how many questions a person has completed of each difficulty, return how many experience points they'll have.
// Examples
// getXP({
//   "Very Easy" : 89,
//   "Easy" : 77,
//   "Medium" : 30,
//   "Hard" : 4,
//   "Very Hard" : 1
// }) ➞ "2055"

// getXP({
//   "Very Easy" : 254,
//   "Easy" : 32,
//   "Medium" : 65,
//   "Hard" : 51,
//   "Very Hard" : 34
// }) ➞ "7650"

const standardObj = {
  "Very Easy": 5,
  Easy: 10,
  Medium: 20,
  Hard: 40,
  "Very Hard": 80,
};

const getXP = function (givenObj) {
  return Object.keys(givenObj).reduce((acc, key) => {
    return acc + standardObj[key] * givenObj[key];
  }, 0);
};

console.log(
  getXP({
    "Very Easy": 89,
    Easy: 77,
    Medium: 30,
    Hard: 4,
    "Very Hard": 1,
  })
);
