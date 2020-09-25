

const contentEventTarget = document.querySelector(".events");
const eventHub = document.querySelector(".dashboard");
// const listOfEventsURL = "";

let eventsArray = [];

export const useEvents = () => {
    return eventsArray.slice();
};

export const getEvents = (event) => {
    // Get a copy of the event array
    const theEvent = useEvents();

    // Filter the copy of events to get the specific Event

};