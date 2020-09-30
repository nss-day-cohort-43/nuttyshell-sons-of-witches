//Author:  Braxton Shoop
//Module Purpose:  Populates the Chat user input form on the DOM

const eventHub = document.querySelector(".container");
const contentTarget = document.querySelector(".chat");

import { saveChat } from './ChatDataProvider.js';

/*Function that establishes the html structure for chat box feature when invoked.
*/
export const renderChat = () => {
    contentTarget.innerHTML = `
        <div class="chatContainer">  
        <div class="chatHeader">Chat</div>
        <input class="newMessage" placeholder="What's on your mind?">
        <button id="submitMessage">Submit Message</button>
        <div class="messagesList"></div>
        </div>
        `
};

/*Function that listens for the user to click the submitMessage button. When it is clicked, this function then evaluates whether the message input box value is empty. If it is
empty, nothing happens. If it is not empty (indicating the user has typed a message), then the typed message value is stored along with the submitting user's userId in the 
database.json api using the saveChat function. 
*/
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