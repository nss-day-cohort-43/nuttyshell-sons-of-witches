//Author:  Braxton Shoop
//Module Purpose:  Establishes connection to API for Fetch, Post, and Delete operations

import { friendList } from './FriendsList.js'

const eventHub = document.querySelector(".container");

const dispatchStateChangeEventFriend = () => {
    const friendStateChangedEvent = new CustomEvent("friendsStateChanged")
    eventHub.dispatchEvent(friendStateChangedEvent)
};

eventHub.addEventListener("friendsStateChanged", event => {
    friendList()
});

let friend;

export const getFriend = () => {
    return fetch(`http://localhost:8088/friends`)
        .then(response => response.json())
        .then(parsedFriend => {
            friend = parsedFriend
        })
};

export const useFriend = () => {
    return friend.slice()
};

export const saveFriend = (friendObj) => {
    return fetch(`http://localhost:8088/friends`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(friendObj)
    })
        .then(getFriend)
        .then(dispatchStateChangeEventFriend)
};

export const deleteFriend = (id) => {
    return fetch(`http://localhost:8088/friends/${id}`, {
        method: "DELETE"
    })
        .then(getFriend)
        .then(dispatchStateChangeEventFriend)
};


















//Virgin State
//Author:  Braxton Shoop
//Module Purpose:  Establishes connection to API for Fetch, Post, and Delete operations
// import { chatList } from './ChatList.js';

// const eventHub = document.querySelector(".container");

// const dispatchStateChangeEventChat = () => {
//     const chatStateChangedEvent = new CustomEvent("chatStateChanged")
//     eventHub.dispatchEvent(chatStateChangedEvent)
// };

// eventHub.addEventListener("chatStateChanged", event => {
//     chatList()
// });

// let chat;

// export const getChat = () => {
//     return fetch(`http://localhost:8088/messages`)
//         .then(response => response.json())
//         .then(parsedChat => {
//             chat = parsedChat
//         })
// };

// export const saveChat = (chatObj) => {
//     return fetch(`http://localhost:8088/messages`, {
//         method: "POST",
//         headers: {
//             "Content-Type": "application/json"
//         },
//         body: JSON.stringify(chatObj)
//     })
//         .then(getChat)
//         .then(dispatchStateChangeEventChat)
// };

// export const useChat = () => {
//     return chat.slice()
// };

// export const deleteChat = (id) => {
//     return fetch(`http://localhost:8088/messages/${id}`, {
//         method: "DELETE"
//     })
//         .then(getChat)
//         .then(dispatchStateChangeEventChat)
// };

// /* Function that edits the message in the database. Then
//     calls for the getChat function. Then the dispatchStateChangeEventChat
// */
// export const editChat = (id, message) => {
//     return fetch(`http://localhost:8088/messages/${id}`, {
//         method: 'PATCH',
//         headers: {
//             "Content-Type": "application/json"
//         },
//         body: JSON.stringify({
//             id: id,
//             message: message
//         })
//     })
//         .then(getChat)
//         .then(dispatchStateChangeEventChat)
// }