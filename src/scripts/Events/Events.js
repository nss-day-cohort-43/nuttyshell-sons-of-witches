
export const eventHTML = (eventObj) => {
    return ` 
        <section id="event-card"
        class="event-card">
            <h2>${eventObj.name}</h2>
            <div>Description: ${eventObj.description}
            <div>Location: ${eventObj.location}</div>
            <div>Time: ${eventObj.time}</div>
            <div>Date: ${eventObj.date}</div>
            
            <br>
            <button type="button" id="delete" value="delete">Delete Event</button>
        </section>
    `
};