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

const renderEvents = (eventCollection) => {
    contentEventTarget.innerHTML = `
        <select class="dropdown" id="eventSelect">
            <option value="0">Select A Event ...</option>
    
        ${eventCollection.map(eventObj => {
        return `<option id="eventSelect${eventObj.name}" value="${eventObj.id}">${eventObj.eventName}</option>`;
    })
        } 
     </select> 
    `
};

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

export const renderEventForm = () => {
    contentEventTarget.innerHTML = `
    <section class="eventForm">
        <fieldset>
        <label>Title</label>
        <input type="text"
        id="eventTitle"></input>
        </fieldset>
        <fieldset>
        <label>Description</label>
        <input type="text"
        id="event-description"></input>
        </fieldset>
        <fieldset>
        <label>Location</label>
        <input type="text"
        id="event-location"></input>
        </fieldset>
        <fieldset>
        <label>Time</label>
        <input type="time"
        id="event-time"></input>
        </fieldset>
        <fieldset>
        <label>Date</label>
        <input type="date"
        id="event-time"></input>
        </fieldset>

    
        <br>
        <button type="button" id="save" value="save">Save Event</button>
        
        <div class="current-event"></div>
    
    `
};