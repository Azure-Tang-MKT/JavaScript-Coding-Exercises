"use strict!";
/* 1.	Write a Rectangle constructor receives two arguments SideA, SideB. The Rectangle class also needs to have two methods getArea() and getPerimeter().

const rectangle1 = new Rectangle(4, 5);
rectangle.getArea() // 20
rectangle.getPerimeter() // 18 */

class Rectangle {
  constructor(sideA, sideB) {
    this.sideA = sideA;
    this.sideB = sideB;
  }

  getArea() {
    return this.sideA * this.sideB;
  }

  getPerimeter() {
    return (this.sideA + this.sideB) * 2;
  }
}

const rectangle1 = new Rectangle(4, 5);
console.log(rectangle1);
console.log(rectangle1.getArea());
console.log(rectangle1.getPerimeter());

/* 2.	Create a Book constructor that has two properties :
  Title
  Author
  and two methods:
  
  A method named getTitle that returns: "Title: " + the instance title.
  A method named getAuthor that returns: "Author: " + the instance author.
  and instantiate this constructor by creating 3 new books:
  
  Pride and Prejudice, Jane Austen 
  Hamlet, William Shakespeare 
  War and Peace,  Leo Tolstoy
  
  const book1 = new Book('Pride and Prejudice', 'Jane Austen');
  const book2 = new Book('Hamlet', 'William Shakespeare');
  const book3 = new Book('War and Peace', 'Leo Tolstoy');
   */
class Book {
  constructor(title, author) {
    this.title = title;
    this.author = author;
  }
  getTitle() {
    return `Title: ${this.title}`;
  }
  getAuthor() {
    return `Author: ${this.author}`;
  }
}

const book1 = new Book("Pride and Prejudice", "Jane Austen");
const book2 = new Book("Hamlet", "William Shakespeare");
const book3 = new Book("War and Peace", "Leo Tolstoy");

console.log(book1);
console.log(book1.getTitle());
console.log(book1.getAuthor());

//3.Create a class named User and create a way to check the number of users (number of instances) that were created, so that the value can be accessed as a class attribute.
class User {
  static userCount = 0;
  constructor(user) {
    this.user = user;
    User.userCount++;
  }
}

const u1 = new User("johnsmith10");
const u2 = new User("marysue1989");
const u3 = new User("milan_rodrick");

console.log(User.userCount);

//method 2:
class User2 {
  constructor(user) {
    this.user = user;
    this.userCount2 = 0;
  }
  get userCountFinal() {
    return this.userCount2++;
  }
}

const u4 = new User2("johnsmith10");
const u5 = new User2("marysue1989");
const u6 = new User2("milan_rodrick");
console.log(User2.userCount2);

//4. Coffee Shop

class Coffeeshop {
  construsctor(name, menu, orders) {
    this.name = name;
    this.menu = menu;
    this.orders = orders;
  }
  //1) addOrder: adds the name of the item to the end of the orders array if it exists on the menu. Otherwise, return "This item is currently unavailable!"
  addOrder = (item) =>
    this.menu.filter((menuItem) => menuItem.item == item).length
      ? this.orders.push(item)
      : `This item is currently unavailable`;

  //2) fulfillOrder: if the orders array is not empty, return "The {item} is ready!". If the orders array is empty, return "All orders have been fulfilled!"

  fulfillOrder = () =>
    this.orders.length
      ? `This ${this.orders.shift()} is ready!`
      : `All orders have been fulfilled.`;

  //3) listOrders: returns the list of orders taken, otherwise, an empty array.

  listOrders = () => this.orders;

  //4)dueAmount: returns the total amount due for the orders taken.
  dueAmount = () =>
    +this.orders
      .reduce((t, x) => t + this.menu.filter((m) => m.item == x)[0].price, 0.0)
      .toFixed(2);

  //5)cheapestItem: returns the name of the cheapest item on the menu.
  cheapestItem = () =>
    this.menu.reduce(
      ([n, p], x) => (x.price < p ? [x.item, x.price] : [n, p]),
      ["", 100.0]
    )[0];

  //6).drinksOnly: returns only the item names of type drink from the menu.
  drinksOnly = () =>
    this.menu.filter((m) => m.type == "drink").map((n) => n.item);

  //7). foodOnly: returns only the item names of type food from the menu.
  foodOnly = () => this.menu.filter((m) => m.type == "food").map((n) => n.item);
}
