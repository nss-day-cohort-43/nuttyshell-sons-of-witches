
import { getChat, useChat } from '../Chat/ChatDataProvider.js'

const eventHub = document.querySelector(".container")

eventHub.addEventListener("click", clickEvent => {
    const contentTarget = document.querySelector("#chatMessagePoster");
    if (clickEvent.target.id === "chatMessagePoster") {

        const chatUserHTML = () => {
            return `
        <button id="addFriend">Add Friend</button>
        `}
    }
})

const contentTarget = document.querySelector("#chatMessagePoster")

export const addChatFriend = () => {
    getChat()
        .then(() => {
            const messages = useChat()
            const identity = useChat()
            render(messages, identity)
        })
}



const render = (identity, messages) => {
    contentTarget.innerHTML = identity.map((chatObj) => {
        chatObj.wordsObj = messages.find(friend => {
            return friend.id === parseInt(chatObj.id)
        })
        return noteHTML(noteObj)
    }).join("")
}