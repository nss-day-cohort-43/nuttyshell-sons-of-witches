import { useEvents, getEvents, saveEvents } from "./EventsDataProvider.js";

const contentEventTarget = document.querySelector(".events");
const eventHub = document.querySelector(".dashboard");

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
    <section class="event-form">
    <h3>ADD EVENT</h3>
        <fieldset>
        <label>Title</label>
        <input type="text"
        id="event-title"></input>
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
        id="event-date"></input>
        </fieldset>
    
        <br>
        <button type="button" id="saveEvent" value="save">Save Event</button>
        <div class="current-event"></div>
    `
};