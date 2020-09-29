import { getTasks, useTasks, deleteTasks, editTasks } from "./TasksDataProvider.js"

const eventHub = document.querySelector(".container")
const contentTarget = document.querySelector(".tasks")
let contentTarget1

/* Function that maps through an array then returns that array as the 
    argument for the function tasksHTML
*/    
const render = () => {
    const contentTarget = document.querySelector("#tasksList")
    contentTarget.innerHTML = useTasks().map(tasks => {
        return tasksHTML(tasks)
    }).join("")
}

/* Function that takes the argument from the rendor function
    and creates the HTML useing the information that was passed
    as the argument.
*/    
const tasksHTML = (tasksObj) => {
    return `
        <div>Title: ${tasksObj.title}</div>
        <div>Summary: ${tasksObj.summary}</div>
        <div>Due Date: ${tasksObj.date}</div>
        ${checkUserId(tasksObj)}
        <p>
    `
}

/* Function that adds a delete button to each task in the list
   but only if the session user is equal to the user that posted
   the task.
*/      
const checkUserId = (tasks) => {
    let userId = sessionStorage.getItem("userId")
    if(parseInt(userId) === tasks.userId){
        return `
        <button id="deleteTasks--${tasks.id}">Delete</button>
        <button id="editTasks--${tasks.id}">Edit</button>
        <button id="completeTasks--${tasks.id}">Task Complete</button>
        <div id="editFormTarget--${tasks.id}"></div>
        `
    }
    else{
        return ""
    }
}

/* Function exported to main.js that is responsible for calling the list to 
   be added to the DOM
*/   
export const tasksList = () => {
    getTasks()
    .then(render)
}

/* Event listener that will check if the delete button was clicked.
   If the delete button was clicked then the id to be deleted will
   be passed to deleteTasks.
 */  
eventHub.addEventListener("click", event => {
    if(event.target.id.startsWith("deleteTasks")){
        const [prefix, id] = event.target.id.split("--")
        deleteTasks(id)
    }
})

/* Event Listener that checks if the edit button is clicked.
    If edit was clicked it calls the tasksEditForm function and passes
    the object to be edited.
*/
eventHub.addEventListener("click", event => {
    if (event.target.id.startsWith("editTasks")) {
        console.log("1")
        const [prefix, id] = event.target.id.split("--")
        let x = useTasks().find(tasks => {
            return parseInt(tasks.id) === parseInt(id)
        })
        contentTarget1 = document.querySelector(`#editFormTarget--${id}`)
        editForm(x)
    }
})

/* Function that takes an object and displays the object it editable fields
    in the HTML at a target location
 */
const editForm = (tasksObj) => {
    contentTarget1.innerHTML = `
         <div class="formPopup" id="tasksEditForm">
            <div class="editFormContainer">
                <h3>Edit Task</h3>
                    <lable>Title</label>
                    <input type="text" id="editTasksTitle" value="${tasksObj.title}"></input>
                    <lable>Summary</label>
                    <input type="text" id="editTasksSummary" value="${tasksObj.summary}"></input>
                    <lable>Due Date</label>
                    <input type="text" id="editTasksDate" value="${tasksObj.date}"></input>
                    <button type="submit" id="editBtn--${tasksObj.id}">Save</button>
                    <button type="button" id="editCancel">Cancel</button>
            </div>
        </div> 
    `
}

/* Event listener that checks if save is clicked in the edit form is cliked.
    If the save button is clicked on the edit form it will call the editArticle
    function and pass the information.
 */
eventHub.addEventListener("click", event => {
    if(event.target.id.startsWith("editBtn")){
        const [prefix, id] = event.target.id.split("--")
        const editTasksObj = {
            id: parseInt(id),
            title: document.querySelector("#editTasksTitle").value,
            summary: document.querySelector("#editTasksSummary").value,
            date: document.querySelector("#editTasksDate").value,
        }
        editTasks(editTasksObj.id, editTasksObj.title, editTasksObj.summary, editTasksObj.date)
    }
})

/* Event listener that checks if the cancel edit button is click.
    If the button is clicked it will call the tasksList function.
 */
eventHub.addEventListener("click", event => {
    if(event.target.id === "editCancel"){
        tasksList()
    }
})








/* Event listener that will check if the task complete button was clicked.
   If the task complete button was clicked then the id to be edited will
   be passed to completeTasks.
 */  
// eventHub.addEventListener("click", event => {
//     if(event.target.id.startsWith("completeTasks")){
//         const [prefix, id] = event.target.id.split("--")
//         editTasks(id)
//     }
// })