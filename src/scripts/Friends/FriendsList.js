//Author:  Braxton Shoop
//Module Purpose:  Populates the saved Chat messages on the DOM

import { getFriend, useFriend, deleteFriend } from './FriendsDataProvider.js'
//import { saveFriend } from './FriendsDataProvider.js';

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
        <div class="friendsCard">
        <div id="friendsList--${personObject.id}">${personObject.friendId}</div></div>
        <div class="deleteFriendParentContainer">
        <button class="deleteFriend" id="deleteFriend--${personObject.userId}">Delete Friend</button >
        </div>
        `
};

eventHub.addEventListener("click", event => {
    if (event.target.id.startsWith("deleteFriend")) {
        const [prefix, id] = event.target.id.split("--")
        deleteFriend(id)
    }
});





///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


// let addingFriend;
// eventHub.addEventListener("click", clickEvent => {
//     if (clickEvent.target.id === "addFriend") {
//         const contentTarget4 = document.querySelector(`#chatMessagePoster--${friendId}`)
//         const [prefix, friendId] = document.querySelector.split("--")
//         let friend = useChat().find(buddy => {
//             return parseInt(buddy.id) === parseInt(friendId)
//         })
//         const addingFriend = {
//             userId: friend,
//             friendId: userId
//         }
//         saveFriend(addingFriend);
//     }
//     saveFriend(addingFriend)
// });








// const addFriend = (friendObject) => {
//     contentTarget2.innerHTML = `
//         <button id="addChatFriend">Add Friend</button>
//                 <button id="cancelFriend">Cancel</button>
//         `
// }

// // const friendUsernameTarget = document.querySelector(".friendUsername")
// // const friendEmailTarget = document.querySelector(".friendEmail")
// const friendChatTarget = document.querySelector(".")
// // if (friendUsernameTarget.value !== "" && friendEmailTarget !== "") {
// const addingFriend = {
//     userId: parseInt(sessionStorage.getItem("userId")),
//     friendId: friendUsernameTarget.value
//             // }
//             saveFriend(addingFriend);
// }
//         else {
//     window.alert("Please enter both your friend's Username and Email Address.")
// }
//     }
// });


// eventHub.addEventListener("click", event => {
//     if (event.target.id.startsWith("chatMessagePoster")) {

//         const [prefix, friendId] = event.target.id.split("--")
//         let friend = useChat().find(message => {
//             return parseInt(message.id) === parseInt(friendId)
//         })
//         contentTarget2 = document.querySelector(`#chatMessagePoster--${friendId}`)
//         addFriend(friend)
//     }
//     else if (event.target.id === "cancelFriend") {
//         chatList()
//     }
// });

