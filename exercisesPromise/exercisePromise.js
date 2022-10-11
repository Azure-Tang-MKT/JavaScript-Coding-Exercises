// 1. Write a function testNum that takes a number as an argument and returns a Promise that tests if the value is less than or greater than the value 10.

// compareToTen(15)
//   .then((result) => console.log(result))
//   .catch((error) => console.log(error));

// compareToTen(8)
//   .then((result) => console.log(result))
//   .catch((error) => console.log(error));

const testNum = function (number) {
  return new Promise((resolve, reject) => {
    if (number > 10) {
      resolve("larger than");
    } else if (number < 10) {
      resolve("smaller than");
    } else {
      reject("equal to");
    }
  });
};

//.then
const compareToTen = function (numberThen) {
  testNum(numberThen)
    .then((message) => {
      console.log(`number is ` + message + ` 10`);
    })
    .catch((message) => {
      console.log(`number is ` + message + ` 10`);
    });
};

compareToTen(15);
compareToTen(8);

//async await

async function compareToTen2(numberAwait) {
  try {
    const message = await testNum(numberAwait);
    console.log(`number is ` + message + ` 10`);
  } catch (err) {
    console.log(`number is ` + err + ` 10`);
  }
}

compareToTen2(15);
compareToTen2(8);

// 2. Call the given API to get the data.
// 	API:
// https://601caf791a9c220017060c02.mockapi.io/api/v1/Events/
// https://601caf791a9c220017060c02.mockapi.io/api/v1/Hosts/
// https://601caf791a9c220017060c02.mockapi.io/api/v1/Events/:id
// https://601caf791a9c220017060c02.mockapi.io/api/v1/Hosts/:id

let ID = 3;
fetch(`https://601caf791a9c220017060c02.mockapi.io/api/v1/Events/`)
  .then((response) => response.json())
  .then((data) => console.log(data))
  .catch((error) => console.error(error));

async function fetchAwait1() {
  try {
    const res1 = await fetch(
      `https://601caf791a9c220017060c02.mockapi.io/api/v1/Events/`
    );
    const data1 = await res1.json();
  } catch {
    (error) => console.log(error);
  }
}
fetchAwait1();

fetch(`https://601caf791a9c220017060c02.mockapi.io/api/v1/Hosts/`)
  .then((response) => response.json())
  .then((data) => console.log(data))
  .catch((error) => console.error(error));

async function fetchAwait2() {
  try {
    const res2 = await fetch(
      `https://601caf791a9c220017060c02.mockapi.io/api/v1/Hosts/`
    );
    const data2 = await res2.json();
  } catch {
    (error) => console.log(error);
  }
}
fetchAwait2();

fetch(`https://601caf791a9c220017060c02.mockapi.io/api/v1/Events/${ID}`)
  .then((response) => response.json())
  .then((data) => console.log(data))
  .catch((error) => console.error(error));
async function fetchAwait3() {
  try {
    const res3 = await fetch(
      `https://601caf791a9c220017060c02.mockapi.io/api/v1/Events/${ID}`
    );
    const data3 = await res3.json();
  } catch {
    (error) => console.log(error);
  }
}
fetchAwait3();

fetch(`https://601caf791a9c220017060c02.mockapi.io/api/v1/Hosts/${ID}`)
  .then((response) => response.json())
  .then((data) => console.log(data))
  .catch((error) => console.error(error));

async function fetchAwait4() {
  try {
    const res4 = await fetch(
      `https://601caf791a9c220017060c02.mockapi.io/api/v1/Hosts/${ID}`
    );
    const data4 = await res4.json();
  } catch {
    (error) => console.log(error);
  }
}
fetchAwait4();
