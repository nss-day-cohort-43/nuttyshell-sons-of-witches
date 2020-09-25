import { eventNameHTML } from "./Events.js";
import { useEvents, getEvents } from "./EventsDataProvider.js";

const contentEventTarget = document.querySelector(".events");
const eventHub = document.querySelector(".dashboard");

const render = (event) => {
    contentEventTarget.innerHTML = useEvents().map
    return eventNameHTML(event)
};

export const eventList = () => {
    getEvents()
        .then(render)
        // .then(() => {
        //     const appStateEvent = useEvents()
        //     render(appStateEvent);
        // })
};