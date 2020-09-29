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




//Is this needed for this module? If not remove this and line 24
// const checkUserId = (friends) => {
//     let userId = sessionStorage.getItem("userId")
//     if (parseInt(userId) === friends.userId) {
//         return `

//         `
//     }
//     else {
//         return ""
//     }
// };

eventHub.addEventListener("click", event => {
    if (event.target.id.startsWith("deleteFriend")) {
        const [prefix, id] = event.target.id.split("--")
        deleteFriend(id)
    }
});














//Code I don't think we need///////////////////////////////////////////////////////////
// let contentTarget1;

// eventHub.addEventListener("click", event => {
//     if (event.target.id.startsWith("editMessage")) {
//         const [prefix, id] = event.target.id.split("--")
//         let x = useChat().find(message => {
//             return parseInt(message.id) === parseInt(id)
//         })
//         contentTarget1 = document.querySelector(`#editChatTarget--${id}`)
//         editForm(x)
//     }
// })

// /* Event listener that checks if save is clicked in the edit form is cliked.
//     If the save button is clicked on the edit form it will call the editChat
//     function and pass the information.
//  */
// eventHub.addEventListener("click", event => {
//     if (event.target.id.startsWith("editBtn")) {
//         const [prefix, id] = event.target.id.split("--")
//         const chatObject = {
//             id: parseInt(id),
//             message: document.querySelector("#editChatMessage").value,
//         }
//         editChat(chatObject.id, chatObject.message)
//     }
// })

// /* Event listener that checks if the cancel edit button is clicked.
//     If the button is clicked it will call the chatList function.
//  */
// eventHub.addEventListener("click", event => {
//     if (event.target.id === "editCancel") {
//         chatList()
//     }
// })

/* Event Listener that checks if the edit button is clicked.
    If edit was clicked it calls the editForm function and passes
    the object to be edited.
*/


/* Function that takes an object and displays the object it editable fields
    in the HTML at a target location
 */
// const editForm = (chatObject) => {
//     contentTarget1.innerHTML = `
//          <div class="chatPopup" id="myEditForm">
//             <div class="editChatContainer">
//                 <h3>Edit Message</h3>
//                     <lable>Message</label>
//                     <input type="text" id="editChatMessage" value="${chatObject.message}"></input>
//                     <button type="submit" id="editBtn--${chatObject.id}">Save</button>
//                     <button type="button" id="editCancel">Cancel Edit</button>
//             </div>
//         </div> 
//     `
// }

//Working on Add Friend Button here/////////////////////////
//let contentTarget2

// eventHub.addEventListener("click", event => {
//     if (event.target.id.startsWith("chatMessagePoster")) {
//         console.log("username clicked")
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
// const addFriend = (friendObject) => {
//     contentTarget2.innerHTML = `
//         <button id="addChatFriend">Add Friend</button>
//         <button id="cancelFriend">Cancel</button>
//         `
// }





///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//Virgin State
//Author:  Braxton Shoop
//Module Purpose:  Populates the saved Chat messages on the DOM

// import { getChat, useChat, deleteChat, editChat } from './ChatDataProvider.js';

// const eventHub = document.querySelector(".container");
// let contentTarget2


// const render = () => {
//     const contentTarget = document.querySelector(".messagesList")
//     contentTarget.innerHTML = useChat().map(message => {
//         return chatHTML(message)
//     }).join("")
// };

// const chatHTML = (chatObject) => {
//     console.log(chatObject)
//     return `
//         <div class="messagesContainer">${chatObject.message}<div class="chatPoster" id="chatMessagePoster--${chatObject.id}">@${chatObject.userId}<div class="friendTarget"></div></div></div>
//         ${checkUserId(chatObject)}
//         `
// };

// const checkUserId = (message) => {
//     let userId = sessionStorage.getItem("userId")
//     if (parseInt(userId) === message.userId) {
//         return `
//         <div class="chatButtonsWithEdit">
//             <div id="editChatTarget--${message.id}"></div>
//                 <div class="chatButtons">
//                     <button class="editMessage" id="editMessage--${message.id}">Edit Message</button >
//                     <button class="deleteMessage" id="deleteMessage--${message.id}">Delete Message</button >
//             </div>    
//         </div>
//         `
//     }
//     else {
//         return ""
//     }
// };

// export const chatList = () => {
//     getChat()
//         .then(render)
// };

// eventHub.addEventListener("click", event => {
//     if (event.target.id.startsWith("deleteMessage")) {
//         const [prefix, id] = event.target.id.split("--")
//         deleteChat(id)
//     }
// });

// //Working on Add Friend Button here/////////////////////////
// eventHub.addEventListener("click", event => {
//     if (event.target.id.startsWith("chatMessagePoster")) {
//         console.log("username clicked")
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

// const addFriend = (friendObject) => {
//     contentTarget2.innerHTML = `
//         <button id="addChatFriend">Add Friend</button>
//         <button id="cancelFriend">Cancel</button>
//         `
// }

// /* Event Listener that checks if the edit button is clicked.
//     If edit was clicked it calls the editForm function and passes
//     the object to be edited.
// */
// let contentTarget1;

// eventHub.addEventListener("click", event => {
//     if (event.target.id.startsWith("editMessage")) {
//         const [prefix, id] = event.target.id.split("--")
//         let x = useChat().find(message => {
//             return parseInt(message.id) === parseInt(id)
//         })
//         contentTarget1 = document.querySelector(`#editChatTarget--${id}`)
//         editForm(x)
//     }
// })

// /* Function that takes an object and displays the object it editable fields
//     in the HTML at a target location
//  */
// const editForm = (chatObject) => {
//     contentTarget1.innerHTML = `
//          <div class="chatPopup" id="myEditForm">
//             <div class="editChatContainer">
//                 <h3>Edit Message</h3>
//                     <lable>Message</label>
//                     <input type="text" id="editChatMessage" value="${chatObject.message}"></input>
//                     <button type="submit" id="editBtn--${chatObject.id}">Save</button>
//                     <button type="button" id="editCancel">Cancel Edit</button>
//             </div>
//         </div> 
//     `
// }

// /* Event listener that checks if save is clicked in the edit form is cliked.
//     If the save button is clicked on the edit form it will call the editChat
//     function and pass the information.
//  */
// eventHub.addEventListener("click", event => {
//     if (event.target.id.startsWith("editBtn")) {
//         const [prefix, id] = event.target.id.split("--")
//         const chatObject = {
//             id: parseInt(id),
//             message: document.querySelector("#editChatMessage").value,
//         }
//         editChat(chatObject.id, chatObject.message)
//     }
// })

// /* Event listener that checks if the cancel edit button is clicked.
//     If the button is clicked it will call the chatList function.
//  */
// eventHub.addEventListener("click", event => {
//     if (event.target.id === "editCancel") {
//         chatList()
//     }
// })