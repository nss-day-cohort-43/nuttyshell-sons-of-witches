


import { getChat, useChat, deleteChat } from './ChatDataProvider.js'
import { messageHTML } from './Chat.js'


const contentTarget = document.querySelector(".chat")
const eventHub = document.querySelector(".dashboard")

const render = () => {
    contentTarget.innerHTML = useChat().map(suspect => {
        return suspect.id
    })
    return messageHTML()

}

export const chatList = () => {
    getChat()
        .then(() => {
            const message = useChat()

            render(message)
        })
}


// eventHub.addEventListener("noteStateChanged", () => {
//     const newChat = useChat()
//     render(newChat)
// })

eventHub.addEventListener("click", event => {
    event.preventDefault()
    if (event.target.id.startsWith("deleteMessage--")) {
        const [prefix, id] = event.target.id.split("--")
        deleteMessage(id)
    }
})