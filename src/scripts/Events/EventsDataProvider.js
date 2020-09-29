import { eventList } from "./EventsList.js";

const contentEventTarget = document.querySelector(".events");
const eventHub = document.querySelector(".dashboard");

eventHub.addEventListener("eventStateChanged", event => {
    eventList()
});

const dispatchChangeEvent = () => {
    const eventStateChangeEvent = new CustomEvent("eventStateChanged")

eventHub.dispatchEvent(eventStateChangeEvent)
};

let events = [];

export const useEvents = () => {
    return events.slice()
};

export const getEvents = () => {
    return fetch(`http://localhost:8088/events`)
        .then(response => response.json())
        .then
        (parsedEvent => {
            events = parsedEvent
        })
};

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

export const deleteEvent = (id) => {
    return fetch(`http://localhost:8088/events/${id}`, {
        method: "DELETE"
    })
        .then(getEvents)
        .then(dispatchChangeEvent)
};

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


