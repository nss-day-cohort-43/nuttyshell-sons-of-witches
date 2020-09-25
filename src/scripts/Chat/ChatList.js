import { getChat, useChat, deleteChat } from './ChatDataProvider.js';

const eventHub = document.querySelector(".container");

const render = () => {
    const contentTarget = document.querySelector(".messagesList")
    contentTarget.innerHTML = useChat().map(message => {
        return chatHTML(message)
    }).join("")
};

const chatHTML = (chatObject) => {
    return `
        <div class="messagesContainer">${chatObject.message}</div>
        ${checkUserId(chatObject)}
        `
};

const checkUserId = (message) => {
    let userId = sessionStorage.getItem("userId")
    if (parseInt(userId) === message.userId) {
        return `
        <button id="editMessage">Edit Message</button >
        <button id="deleteMessage--${message.id}">Delete Message</button >
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



// event.preventDefault()