

const contentEventTarget = document.querySelector(".events");
const eventHub = document.querySelector(".dashboard");

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
            "content-type":
                "application/json"
        },
        body: JSON.stringify
            (eventObj)
    })
        .then(getEvents)
        .then(dispatchEvent)
};