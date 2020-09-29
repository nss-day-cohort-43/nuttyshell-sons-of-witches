import { eventList } from "./EventsList.js";
import { editEvent, useEvents } from "./EventsDataProvider.js";

//Takes the argument from the render function in EvntList.js and creates the the HTML form using the info. that was passed as an argument. 
export const eventHTML = (eventObj) => {
    return ` 
        <section id="event-card"
        class="event-card">
            <h2>${eventObj.title}</h2>
            <div>Description: ${eventObj.description}
            <div>Location: ${eventObj.location}</div>
            <div>Time: ${eventObj.time}</div>
            <div>Date: ${eventObj.date}</div>${checkUserId(eventObj)}
            <br>
            <button type="button" id="show-Weather">Show Weather</button>
        </section>
    `
};

const checkUserId = (eventObj) => {
    let userId = sessionStorage.getItem("userId")
    if (parseInt(userId) === eventObj.userId) {
        return `
        <button type="button" value="delete" id="deleteEvent--${eventObj.id}">Delete Event</button>
        <button type="button" id="edit-event--${eventObj.id}">Edit Event</button>
        <div id="edited-Target--${eventObj.id}"></div>
        `
    } else {
        return ""
    }
};

const eventHub = document.querySelector(".dashboard");

eventHub.addEventListener("click", clickEvent => {
    if (clickEvent.target.id.startsWith("edit2-event")) {
        const [prefix, id] = clickEvent.target.id.split("--")
        const editEventObj = {
            id: parseInt(id),
            title: document.querySelector("#edit-title").value,
            description: document.querySelector("#edit-description").value,
            location: document.querySelector("#edit-location").value,
            time: document.querySelector("#edit-time").value,
            date: document.querySelector("#edit-date").value,
        }
        editEvent(editEventObj.id, editEventObj.title, editEventObj.description, editEventObj.location, editEventObj.time, editEventObj.date)
    }
});

eventHub.addEventListener("click", clickEvent =>{
    if (clickEvent.target.id === "edit-cancel") {
        eventList()
    }
});

eventHub.addEventListener("click", clickEvent => {
    if (clickEvent.target.id.startsWith("edit-event")) {
        const [prefix, id] = clickEvent.target.id.split("--")
        let edits = useEvents().find(event => {
            return parseInt(event.id) === parseInt(id)
        })
        contentEditTarget = document.querySelector(`#edited-Target--${id}`)
        editEventForm(edits)
    }
});

let contentEditTarget = [];

const editEventForm = (eventObj) => {
    contentEditTarget.innerHTML = `
    <div class="edit-form" id="editedEvent">
    <section class="event-form">
    <h3>Edit Event</h3>
        <fieldset>
        <label>Title</label>
        <input type="text"
        id="edit-title" value="${eventObj.title}"></input>
        </fieldset>

        <fieldset>
        <label>Description</label>
        <input type="text"
        id="edit-description" value="${eventObj.description}"></input>
        </fieldset>

        <fieldset>
        <label>Location</label>
        <input type="text"
        id="edit-location" value="${eventObj.location}"></input>
        </fieldset>

        <fieldset>
        <label>Time</label>
        <input type="time"
        id="edit-time" value="${eventObj.time}"></input>
        </fieldset>

        <fieldset>
        <label>Date</label>
        <input type="date"
        id="edit-date" value="${eventObj.date}"></input>
        </fieldset>
    
        <br>
        <button type="submit" id="edit2-event--${eventObj.id}">Save Event</button>
        <button type="button" id="edit-cancel">Cancel Edit</button>
        <div class="current-event"></div>
    </div>
    `
};