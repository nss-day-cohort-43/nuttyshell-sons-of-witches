import { eventNameHTML } from "./Events.js";
import { useEvents, getEvents } from "./EventsDataProvider.js";


const eventHub = document.querySelector(".dashboard");

const render = () => {
    const contentEventTarget = document.querySelector(".events");

    contentEventTarget.innerHTML = useEvents().map(event => {
        return eventNameHTML(event)
    }).join("")
};

export const eventList = () => {
    getEvents()
        .then(render)
};