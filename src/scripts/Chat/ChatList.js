//Author:  Braxton Shoop
//Module Purpose:  Populates the saved Chat messages on the DOM

import { getChat, useChat, deleteChat } from './ChatDataProvider.js';

const eventHub = document.querySelector(".container");

const render = () => {
    const contentTarget = document.querySelector(".messagesList")
    contentTarget.innerHTML = useChat().map(message => {
        return chatHTML(message)
    }).join("")
};

const chatHTML = (chatObject) => {
    console.log(chatObject)
    return `
        <div class="messagesContainer">${chatObject.message}<div class="chatPoster" id="chatMessagePoster--${chatObject.id}">@${chatObject.userId}</div><div class="friendTarget"></div></div>
        ${checkUserId(chatObject)}
        `
};

const checkUserId = (message) => {
    let userId = sessionStorage.getItem("userId")
    if (parseInt(userId) === message.userId) {
        return `
        <div class="chatButtons">
            <button id="editMessage">Edit Message</button >
            <button class="deleteMessage" id="deleteMessage--${message.id}">Delete Message</button >
        </div>    
        `
    }
    else {
        return ""
    }
};

export const chatList = () => {
    getChat()
        .then(render)
};

eventHub.addEventListener("click", event => {
    if (event.target.id.startsWith("deleteMessage")) {
        const [prefix, id] = event.target.id.split("--")
        deleteChat(id)
    }
});

eventHub.addEventListener("click", event => {
    if (event.target.id.startsWith("chatMessagePoster--")) {
        console.log("username clicked")
        const [prefix, id] = event.target.id.split("--")
        console.log(id)
        const contentTarget = document.querySelector(".friendTarget");
        contentTarget.innerHTML = `
        <button id="addFriend">Add Friend</button>
        `
    }
});



// if (messages.id === chatObject.id) {
//     const contentTarget = document.querySelector("#chatMessagePoster");
//     contentTarget.innerHTML = `
//     <button id="addFriend">Add Friend</button>
//     `
// }
// else {
//     ""
// }