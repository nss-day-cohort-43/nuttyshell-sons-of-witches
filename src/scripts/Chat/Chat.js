
const eventHub = document.querySelector(".dashboard")
const contentTarget = document.querySelector(".messageContainer");

//this will display the posted message in the messagesContainer
export const messageHTML = (chatObj) => {
    return `<div class="messagesContainer">${chatObj.message}</div>
                <div class="messageControls">
                <button id="editMessage">Edit Message</button>
                <button class="deleteMessage" id="deleteMessage--${chatObj.id}">Delete Message</button>
                </div>
        `
}