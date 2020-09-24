import { useEvents, getEvents } from "./EventsDataProvider.js";


const contentEventTarget = document.querySelector(".events");
const eventHub = document.querySelector(".dashboard");


export const ColorList = () => {
    getEvents()
    .then(() => {
        const eventArray = useEvents()
        renderEvents(eventArray);
    })
};

const renderEvents = (theEvents) => {
    contentEventTarget.innerHTML = `
    <select class="dropdown" id="eventSelect">
        <option value="0">Select A Event ...</option>

    ${theEvents.map(eventObj => {
        return `<option value="${eventObj.id}">${eventObj.eventName}</option>`;
        })
     }
     </select>
    `
};