// 1. If this keyword is alone, it refers to the global object(window).
console.log(this); // Window

/* // 2. If this keyword is in a regular function (not in strict mode), it refers to the global object(window)
function test () {
    console.log(this)
} 

test() // Window */

/* // 3. If this keyword is in a regular function (in strict mode), it refers to undefined
"use strict";
function test () {
    console.log(this)
} 

test() // undefined */

/* // 4. If this keyword is in an object method, it refers to the object which calls the method
const obj = {
	  name: 'kyle',
 	  age: 30,
  sayHello: function() {
  	console.log(`I am ${this.name} and I am ${this.age} years old`)
  }
}

obj.sayHello() // I am kyle and I am 30 years old */

/* // If this keyword is in an array function, it refers to the object in the parent scope. 
const test = () => {
	console.log(this)
}

test() // Window */
// ============================================================
/* const obj = {
	  name: 'kyle',
 	  age: 30,
  sayHello: () => {
  	console.log(`I am ${this.name} and I am ${this.age} years old`)
  }
}

obj.sayHello() // I am undefined(result) and I am undefined years old */
// ============================================================
/* 		const name = 'mark';
		const age = 30;
		
		const obj = {
	  name: 'kyle',
 	  age: 30,
  sayHello: () => {
  	console.log(`I am ${this.name} and I am ${this.age} years old`)
  }
}

obj.sayHello() // I am undefined(result) and I am undefined years old */
// ==============================================================
/* var name = 'mark';
		var age = 30;
		
		const obj = {
	  name: 'kyle',
 	  age: 30,
  sayHello: () => {
  	console.log(`I am ${this.name} and I am ${this.age} years old`)
  }
}

obj.sayHello() // I am mark and I am 30 years old */

// ============================================================
// Question:
// 	What will the this refer to in the following example:
// 	=======================================
/* const obj = {
  name: 'kyle',
  age: 30,
  sayHello: function() {
    function test() {
      console.log(`I am ${this.name} and I am ${this.age} years old`)
    }

    test()
  }
};

obj.sayHello() */
// =======================================
/* 			"use strict";
			
var name = "kyle";
			var age = 30;
function outerFunc () {
	return function () {
	console.log(`I am ${this.name} and I am ${this.age} years old`)
}
}

const inneFunc = outerFunc();
inneFunc(); */
// ======================================
/* const person = {
  firstName:"John",
  lastName: "Doe",
  fullName: function() {
    return this.firstName + " " + this.lastName;
  }
}

let fullName = person.fullName;

fullName(); */
// =======================================
/* const person = {
  firstName:"John",
  lastName: "Doe",
  fullName: function() {
    return this.firstName + " " + this.lastName;
  }
}

const person2 = {
	firstName:"Kyle",
  	lastName: "Zhang",
}

person2.fullName = person.fullName;

console.log(person2.fullName());

let fullName = person.fullName;
console.log(fullName()) */

// ========================================
/* "use strict";
			
var name = "kyle";
var age = 30;
const obj = {
    name: 'azure',
    age: 28
}

function outerFunc () {
	return function () {
	console.log(`I am ${this.name} and I am ${this.age} years old`)
}
}

const inneFunc = outerFunc().bind(obj);
inneFunc(); */
// ========================================
/* "use strict";
			
var name = "kyle";
var age = 30;
const obj = {
    name: 'azure',
    age: 28
}

function outerFunc () {
	return () => {
	console.log(`I am ${this.name} and I am ${this.age} years old`)
}
}

const inneFunc = outerFunc().bind(obj);
inneFunc();
 */
