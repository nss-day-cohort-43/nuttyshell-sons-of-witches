import { useEvents, getEvents, saveEvents } from "./EventsDataProvider.js";

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
});

eventHub.addEventListener("click", clickEvent => {
    if (clickEvent.target.id === "submitEvent") {
        const eventImput = document.querySelector(".newEvent")
        if (eventImput.value !== "0") {
            const planedEvent = {
                userId: parseInt(eventInput.value),
                event: newEvent.value
            }
            saveEvents(planedEvent);
        }
    }
});

const renderEvents = (eventCollection) => {
    contentEventTarget.innerHTML = `
        <select class="dropdown" id="eventSelect">
            <option value="0">Select A Event ...</option>

        ${eventCollection.map(eventObj => {
        return `<option value="${eventObj.id}">${eventObj.eventName}</option>`;
    })
        }
     </select>
    `
};