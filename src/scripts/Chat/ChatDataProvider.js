//Author:  Braxton Shoop
//Module Purpose:  Establishes connection to API for Fetch, Post, and Delete operations

import { chatList } from './ChatList.js';

const eventHub = document.querySelector(".container");

/*Function that creates a new custom event called chatStateChanged and dispatches it to the eventhub when invoked.
*/
const dispatchStateChangeEventChat = () => {
    const chatStateChangedEvent = new CustomEvent("chatStateChanged")
    eventHub.dispatchEvent(chatStateChangedEvent)
};

/*Function that invokes the chatList function when the chatStateChanged event is triggered
*/
eventHub.addEventListener("chatStateChanged", event => {
    chatList()
});

let chat;

/*Function that FETCHES messages objects from the database.json api and saves their parsed data into the chat variable when invoked.
*/
export const getChat = () => {
    return fetch(`http://localhost:8088/messages`)
        .then(response => response.json())
        .then(parsedChat => {
            chat = parsedChat
        })
};

/*Function that POSTS new messages objects to the database.json api when invoked. Then calls for the getChat function. Then the dispatchStateChangeEventChat.
*/
export const saveChat = (chatObj) => {
    return fetch(`http://localhost:8088/messages`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(chatObj)
    })
        .then(getChat)
        .then(dispatchStateChangeEventChat)
};

/*Function that reates an array with a copy of the messages objects data fetched by the getChat function.
*/

export const useChat = () => {
    return chat.slice()
};

/*Function that deletes select messages objects from the database.json api when invoked. Then calls for the getChat function. Then the dispatchStateChangeEventChat.
*/
export const deleteChat = (id) => {
    return fetch(`http://localhost:8088/messages/${id}`, {
        method: "DELETE"
    })
        .then(getChat)
        .then(dispatchStateChangeEventChat)
};

/* Function that edits the message in the database. Then calls for the getChat function. Then the dispatchStateChangeEventChat.
*/
export const editChat = (id, message) => {
    return fetch(`http://localhost:8088/messages/${id}`, {
        method: 'PATCH',
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            id: id,
            message: message
        })
    })
        .then(getChat)
        .then(dispatchStateChangeEventChat)
};