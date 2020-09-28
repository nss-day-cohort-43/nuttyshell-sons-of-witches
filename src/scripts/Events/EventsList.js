import { eventHTML } from "./Events.js";
import { useEvents, getEvents, deleteEvent } from "./EventsDataProvider.js";

const eventHub = document.querySelector(".dashboard");

eventHub.addEventListener("click", clickEvent => {
    if (clickEvent.target.id.startsWith("deleteEvent")) {
        const [prefix, id] = clickEvent.target.id.split("--")
        deleteAnEvent(id)
    }
});

export const eventList = () => {
    getEvents()
        .then(render)
};

const render = () => {
    const contentEventTarget = document.querySelector(".current-event");
    
    contentEventTarget.innerHTML = useEvents().map(event => {
        return eventHTML(event)
    }).join("")
};