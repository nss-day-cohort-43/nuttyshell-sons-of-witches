//Author:  Braxton Shoop
//Module Purpose:  Populates the Chat user input form on the DOM

const eventHub = document.querySelector(".container");
const contentTarget = document.querySelector(".chat");

import { saveChat } from './ChatDataProvider.js';

export const renderChat = () => {
    contentTarget.innerHTML = `
        <div class="chatHeader">Chat</div>
        <input class="newMessage" placeholder="What's on your mind?"></div>
        <button id="submitMessage">Submit Message</button>
        <div class="messagesList"></div>
        </div>
        `
};

eventHub.addEventListener("click", clickEvent => {
    if (clickEvent.target.id === "submitMessage") {
        const messageInput = document.querySelector(".newMessage")
        if (messageInput.value !== "") {
            const preparedMessage = {
                userId: parseInt(sessionStorage.getItem("userId")),
                message: messageInput.value
            }
            saveChat(preparedMessage);
        }
    }
});

