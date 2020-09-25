import { chatList } from './ChatList.js';

const eventHub = document.querySelector(".container");

const dispatchStateChangeEvent = () => {
    const chatStateChangedEvent = new CustomEvent("chatStateChanged")
    eventHub.dispatchEvent(chatStateChangedEvent)
};

eventHub.addEventListener("chatStateChanged", event => {
    chatList()
});

let chat;

export const getChat = () => {
    return fetch(`http://localhost:8088/messages`)
        .then(response => response.json())
        .then(parsedChat => {
            chat = parsedChat
        })
};

export const saveChat = (chatObj) => {
    return fetch(`http://localhost:8088/messages`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(chatObj)
    })
        .then(getChat)
        .then(dispatchStateChangeEvent)
};

export const useChat = () => {
    return chat.slice()
};

export const deleteChat = (id) => {
    return fetch(`http://localhost:8088/messages/${id}`, {
        method: "DELETE"
    })
        .then(getChat)
        .then(dispatchStateChangeEvent)
};