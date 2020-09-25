
export const eventNameHTML = (eventObj) => {
    return ` 
        <section id="event-card"
        class="event-card"
        value="${eventObj.id}">
            <h2>${eventObj.name}</h2>
            <div>Date: ${eventObj.date}</div>
            <div>Time: ${eventObj.time}</div>
            <div>Location: ${eventObj.location}</div>
        </section>
    `  
};