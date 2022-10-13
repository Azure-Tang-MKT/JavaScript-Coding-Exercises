"use strict";
//1.  Events API: https://601caf791a9c220017060c02.mockapi.io/api/v1/Events/ Write a function which will create a new event using the Event API;
const addEvent = function (eventInfo) {
  fetch("https://601caf791a9c220017060c02.mockapi.io/api/v1/Events/", {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(eventInfo),
  })
    .then((response) => response.json())
    .then((data) => console.log(data))
    .catch((err) => console.log(err));
};
const newEvent1 = {
  date: "2022-09-29T11:32:40",
  category: "food",
  description: "this is a new event created by Azure",
  city: "Toronto, CA",
  venue: "482 Bloor St W, Toronto, ON, Canada",
  title: "Let's go shopping!",
};

const newEvent2 = {
  date: "2022-10-29T11:32:40",
  category: "music",
  description: "this is a new event created by Azure",
  city: "Toronto, CA",
  venue: "1145 Bloor St W, Toronto, ON, Canada",
  title: "Let's go dancing!",
};

/*
addEvent(newEvent1);
addEvent(newEvent2);
*/

// 	2. Events API: https://601caf791a9c220017060c02.mockapi.io/api/v1/Events/  Delete events with id 17, 18.
const deleteEvent = function (eventID) {
  fetch(
    `https://601caf791a9c220017060c02.mockapi.io/api/v1/Events/${eventID}`,
    {
      method: "DELETE",
    }
  )
    .then((response) => response.json())
    .then((data) => console.log(data))
    .catch((err) => console.log(err));
};

/*
deleteEvent(17);
deleteEvent(18); 
*/

//3. Events API: https://601caf791a9c220017060c02.mockapi.io/api/v1/Events/ Write a function to update a specific event. Update the city property from "Scarborough, UK" to "Scarborough, CA"  for event with id 23. Update the title property from "title 11" to "This is the title 11" for event.
const updateObj1 = { city: "Scarborough,CA" };
const updateObj2 = { title: "This is the title 11" };

const updateEvent = function (id, updateObj) {
  fetch(`https://601caf791a9c220017060c02.mockapi.io/api/v1/Events/${id}`, {
    method: "PUT",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(updateObj),
  })
    .then((response) => response.json())
    .then((data) => console.log(data))
    .catch((err) => console.log(err));
};

updateEvent(23, updateObj1);
updateEvent(11, updateObj2);

// 4. Events API: https://601caf791a9c220017060c02.mockapi.io/api/v1/Events/ Write a function to fetch the event API and returns the data which category is “travel”. Write a function to fetch the event API and returns the data which category is “travel” and date is on “2020-03-27”

fetch(
  "https://601caf791a9c220017060c02.mockapi.io/api/v1/Events/?category=travel"
)
  .then((response) => response.json())
  .then((data) => console.log(data))
  .catch((error) => console.error(error));

fetch(
  "https://601caf791a9c220017060c02.mockapi.io/api/v1/Events/?date=2020-03-27&category=travel"
)
  .then((response) => response.json())
  .then((data) => console.log(data))
  .catch((error) => console.error(error));
