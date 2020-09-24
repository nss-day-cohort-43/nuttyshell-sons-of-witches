

export const eventName = (eventObj) => {
    return ` 
    <section id="event-card"${eventObj.id} class="event-card">
    <h2>${eventObj.name}</h2>
    `  
};