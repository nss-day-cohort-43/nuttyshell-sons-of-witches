import { useEvents, getEvents, saveEvents } from "./EventsDataProvider.js";

const contentEventTarget = document.querySelector(".events");
const eventHub = document.querySelector(".dashboard");

// creates an event when the save button is clicked
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

// create the Event form for the user to fill out the details of an event
export const renderEventForm = () => {
    contentEventTarget.innerHTML = `
    <div class="event-form">
    <h3 class="addEventHeader">Event List</h3>
        <fieldset>
        <label>Title</label>
        <input type="text" id="event-title">
        </fieldset>

        <fieldset>
        <label>Description</label>
        <input type="text" id="event-description">
        </fieldset>

        <fieldset>
        <label>Location</label>
        <input type="text" id="event-location">
        </fieldset>

        <fieldset>
        <label>Time</label>
        <input type="time" id="event-time">
        </fieldset>

        <fieldset>
        <label>Date</label>
        <input type="date" id="event-date">
        </fieldset>
    
        <br>
        <button type="button" id="saveEvent" value="save">Save Event</button>
        <div class="current-event"></div>
    </div>
    `
};