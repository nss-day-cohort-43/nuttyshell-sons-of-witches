//Author:  Braxton Shoop
//Module Purpose:  Populates the Chat user input form on the DOM

const eventHub = document.querySelector(".container");
const contentTarget = document.querySelector(".friends");

import { saveFriend } from './FriendsDataProvider.js';

export const renderFriend = () => {
    contentTarget.innerHTML = `
        <div class="friendsContainer">
            <H3 class="friendHeader">Friends</H3>
            <input class="friendUsername" placeholder="What's your friend's Username?">
        <input class="friendEmail" placeholder="What's your friend's Email?">
        <button id="addFriend">Save</button>
        <div class="friendsList"></div>
        </div>
        `
};

eventHub.addEventListener("click", clickEvent => {
    if (clickEvent.target.id === "addFriend") {
        const friendUsernameTarget = document.querySelector(".friendUsername")
        const friendEmailTarget = document.querySelector(".friendEmail")
        if (friendUsernameTarget.value !== "" && friendEmailTarget !== "") {
            const addingFriend = {
                userId: parseInt(sessionStorage.getItem("userId")),
                friendId: friendUsernameTarget.value
            }
            saveFriend(addingFriend);
        }
        else {
            window.alert("Please enter both your friend's Username and Email Address.")
        }
    }
});