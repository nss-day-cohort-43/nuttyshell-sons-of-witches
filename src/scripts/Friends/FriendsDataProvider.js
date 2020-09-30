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