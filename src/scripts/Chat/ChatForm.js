const eventHub = document.querySelector(".dashboard")
const contentTarget = document.querySelector(".chat");
import { getChat, useChat } from './ChatDataProvider.js'
import { saveChat } from './ChatDataProvider.js'
eventHub.addEventListener("click", clickEvent => {
    if (clickEvent.target.id === "submitMessage") {
        const messageInput = document.querySelector(".newMessage")
        if (messageInput.value !== "") {
            const preparedMessage = {
                userId: parseInt(messageInput.value),
                message: messageInput.value
            }
            saveChat(preparedMessage);
        }
    }
});
const render = (savedMessage) => {

    contentTarget.innerHTML = `
        <div class="chatHeader">Chat</div>
        <input class="newMessage" ></div>
        <button id="submitMessage">Submit Message</button>`
    //    ${savedMessage.map(chatObj => {
    //     return `<div class="messagesContainer">${chatObj.message}</div>
    //             <div class="messageControls">
    //             <button id="editMessage">Edit Message</button>
    //             <button class="deleteMessage" id="deleteMessage--${chatObj.id}">Delete Message</button>
    //             </div>
    //     `
    // }).join("")
    //     }
}
export const chatForm = () => {
    getChat()
        .then(() => {
            render(useChat())
        })
};












// import { getChat, useChat } from './ChatDataProvider.js'
// import { saveChat } from './ChatDataProvider.js'

// eventHub.addEventListener("click", clickEvent => {
//     if (clickEvent.target.id === "submitMessage") {
//         const messageID = document.querySelector("#journalDate");
//         const messageEntry = document.querySelector("#journalDate");

//         const savedChat = {
//             userId: parseInt(messageID.value),
//             newMessage: message.value,
//         }
//         saveChat(savedChat);
//     }
// })

// eventHub.addEventListener("click", clickEvent => {
//     if (clickEvent.target.id === "submitMessage") {
//         console.log("test")


        // const message = document.querySelector(".newMessage")

        // if (newMessage.value !== "0") {
        //     console.log("test")
        //     // const savedChat = {
        //     //     userId: parseInt(message.userId),
        //     //     newMessage: message.value,

        //     //}
        //     saveChat(savedChat);
//     }
// })