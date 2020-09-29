import { eventHTML } from "./Events.js";
import { useEvents, getEvents, deleteEvent, saveEvents, editEvent} from "./EventsDataProvider.js";
import { editEventForm } from "./EventsForm.js";

const contentTarget = document.querySelector(".events");
const eventHub = document.querySelector(".dashboard");

eventHub.addEventListener("click", clickEvent => {
    if (clickEvent.target.id === ("saveEvent")) {
        const saveButtonObj = {
                userId: parseInt(sessionStorage.getItem("userId")),
                name: document.querySelector("#event-title").value,
                description: document.querySelector("#event-description").value,
                location: document.querySelector("#event-location").value,
                time: document.querySelector("#event-time").value,
                date: document.querySelector("#event-date").value
        }
        saveEvents(saveButtonObj);
    }
});

eventHub.addEventListener("click", clickEvent => {
    if (clickEvent.target.id.startsWith("deleteEvent")) {
        const [prefix, id] = clickEvent.target.id.split("--")
        deleteEvent(id)
    }
});

eventHub.addEventListener("click", clickEvent => {
    if (clickEvent.target.id.startsWith("editButton")) {
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
    if (clickEvent.target.id === "editCancel") {
        eventList()
    }
});

eventHub.addEventListener("click", clickEvent => {
    if (clickEvent.target.id.startsWith("editEvent")) {
        const [prefix, id] = clickEvent.target.id.split("--")
        let edits = useEvents().find(event => {
            return parseInt(event.id) === parseInt(id)
        })
        contentEditTarget = document.querySelector(`#editedTarget--${id}`)
        editEventForm(edits)
    }
});

//Exports function to main.js by calling the list to the Dom
export const eventList = () => {
    getEvents()
        .then(render)
};

//maps through an array then returns the array as an argument for the eventHTML function.
const render = () => {
    const contentEventTarget = document.querySelector(".current-event");
    
contentEventTarget.innerHTML = useEvents().map(event => {
        return eventHTML(event)
    }).join("")
};