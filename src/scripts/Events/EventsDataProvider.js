import { eventList } from "./EventsList.js";

const contentEventTarget = document.querySelector(".events");
const eventHub = document.querySelector(".dashboard");

eventHub.addEventListener("eventStateChanged", event => {
    eventList()
});

//Calls the eventHub about any changes that were made to the Api
const dispatchChangeEvent = () => {
    const eventStateChangeEvent = new CustomEvent("eventStateChanged")

    eventHub.dispatchEvent(eventStateChangeEvent)
};

let events = [];

// A function that takes in the events to create a copy of an array to be used
export const useEvents = () => {
    return events.slice()
};

// gets the events from the .json Api
export const getEvents = () => {
    return fetch(`http://localhost:8088/events`)
        .then(response => response.json())
        .then
        (parsedEvent => {
            events = parsedEvent
        })
};

//A function that saves an event that was created by the user and adds it to the database.json file
export const saveEvents = (eventObj) => {
    return fetch(`http://localhost:8088/events?_expand=user&_sort=id&_order=DESC`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(eventObj)
    })
        .then(getEvents)
        .then(dispatchChangeEvent)
};

// A function that deletes an event for the .json database. Then calls for getEvents function. Then the dispatchChangeEvent
export const deleteEvent = (id) => {
    return fetch(`http://localhost:8088/events/${id}`, {
        method: "DELETE"
    })
        .then(getEvents)
        .then(dispatchChangeEvent)
};

// A function that edit an event in the database.json Then calls for getEvents function. Then the dispatchChangeEvent
export const editEvent = (id, title, description, location, time, date) => {
    return fetch(`http://localhost:8088/events/${id}`, {
        method: "PATCH",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            title: title,
            description: description,
            location: location,
            time: time,
            date: date
        })
    })
        .then(getEvents)
        .then(dispatchChangeEvent)
};


