

const contentEventTarget = document.querySelector(".events");
const eventHub = document.querySelector(".dashboard");

let eventsArray = [];

export const useEvents = () => {
    return eventsArray.slice();
};

export const getEvents = () => {
    return fetch(`http://localhost:8088/events?_expand=user`)
        .then(response => response.json())
        .then(parsedEvents => {
            events =
                parsedEvents
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