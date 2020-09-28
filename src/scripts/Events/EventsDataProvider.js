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
    return fetch(`http://localhost:8088/events?_expand=user`)
        .then(response => response.json())
        .then
        (parsedEvents => {
            events = parsedEvents
            console.log(events)
        })
};

export const saveEvents = (eventObj) => {
    return fetch(`http://localhost:8088/events?_expand=user`, {
        method: "POST",
        headers: {
        "content-type": "application/json"
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