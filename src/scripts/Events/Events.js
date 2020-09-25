
export const eventName = (eventObj) => {
    return ` 
        <section id="event-card"
        class="event-card"
        value="${eventObj.id}">
        <h2>${eventObj.name}</h2>
    `  
};