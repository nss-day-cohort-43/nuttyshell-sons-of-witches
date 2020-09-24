import { useEvents, getEvents } from "./EventsDataProvider.js";


const contentEventTarget = document.querySelector(".events");
const eventHub = document.querySelector(".dashboard");

eventHub.addEventListener("change", e => {
    if (e.target.id === "eventSelect") {
    const customEvent = new CustomEvent("eventChosen", {
        detail: {
            eventThatWasChosen: e.target.value,
            chosenEventId: parseInt(e.target.id)
        }
    })
    eventHub.dispatchEvent(customEvent);
    }
})


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