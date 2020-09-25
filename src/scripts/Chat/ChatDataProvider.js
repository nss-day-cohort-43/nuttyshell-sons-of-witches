const eventHub = document.querySelector(".dashboard")
const dispatchStateChangeEvent = () => {
    const chatStateChangedEvent = new CustomEvent("chatStateChanged")
    eventHub.dispatchEvent(chatStateChangedEvent)
}
let chat
export const getChat = () => {
    return fetch(`http://localhost:8088/messages`)
        .then(response => response.json())
        .then(parsedChat => {
            chat = parsedChat
        })
}
export const saveChat = (chatObj) => {
    return fetch(`http://localhost:8088/messages`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(chatObj)
    })
        .then(() => {
            return getChat()
        })
        .then(dispatchStateChangeEvent)
};
export const useChat = () => {
    return chat.slice()
}






export const deleteChat = messageId => {
    return fetch(`http://localhost:8088/messages/${messageId}`, {
        method: "DELETE"
    })
        .then(getChat)
        .then(dispatchStateChangeEvent)
}