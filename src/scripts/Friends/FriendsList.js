//Author:  Braxton Shoop
//Module Purpose:  Populates the saved Chat messages on the DOM

import { getFriend, useFriend, deleteFriend } from './FriendsDataProvider.js'

const eventHub = document.querySelector(".container");

const render = () => {
    const contentTarget = document.querySelector(".friendsList")
    contentTarget.innerHTML = useFriend().map(person => {
        return friendHTML(person)
    }).join("")
};

export const friendList = () => {
    getFriend()
        .then(render)
};

const friendHTML = (personObject) => {
    return `
        <div id="friendsList--${personObject.id}">${personObject.friendId}</div>
        <button class="deleteFriend" id="deleteFriend--${personObject.id}">Delete Friend</button >
        `
};

eventHub.addEventListener("click", event => {
    if (event.target.id.startsWith("deleteFriend")) {
        const [prefix, id] = event.target.id.split("--")
        deleteFriend(id)
    }
});