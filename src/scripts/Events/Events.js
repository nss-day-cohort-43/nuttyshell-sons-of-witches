//Takes the argument from the render function in EvntList.js and creates the the HTML form using the info. that was passed as an argument. 
export const eventHTML = (eventObj) => {
    return ` 
        <section id="event-card"
        class="event-card">
            <h2>${eventObj.name}</h2>
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
        <button type="button" id="editEvent--${eventObj.id}">Edit Event</button>
        <div id="editedTarget--${eventObj.id}"></div>
        `
    } else {
        return ""
    }
};