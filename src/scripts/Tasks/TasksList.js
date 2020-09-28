import { getTasks, useTasks, deleteTasks } from "./TasksDataProvider.js"

const eventHub = document.querySelector(".container")

/* Function that maps through an array then returns that array as the 
    argument for the function articleHTML
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
const tasksHTML = (tasksObject) => {
    return `
        <div>Title: ${tasksObject.title}</div>
        <div>Summary: ${tasksObject.summary}</div>
        <div>Due Date: ${tasksObject.date}</div>
        ${checkUserId(tasksObject)}
        <p>
    `
}

/* Function that adds a delete button to each article in the list
   but only if the session user is equal to the user that posted
   the article.
*/      
const checkUserId = (tasks) => {
    let userId = sessionStorage.getItem("userId")
    if(parseInt(userId) === tasks.userId){
        return `
        <button id="deleteTasks--${tasks.id}">Delete</button>
        <button id="editTask--${tasks.id}">Edit</button>
        <button id="completeTask--${tasks.id}">Task Complete</button>
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
   be passed to deleteArticle.
 */  
eventHub.addEventListener("click", event => {
    if(event.target.id.startsWith("deleteTasks")){
        const [prefix, id] = event.target.id.split("--")
        deleteTasks(id)
    }
})
/* Event listener that will check if the edit button was clicked.
   If the edit button was clicked then the id to be edited will
   be passed to editTasks.
 */  
eventHub.addEventListener("click", event => {
    if(event.target.id.startsWith("editTasks")){
        const [prefix, id] = event.target.id.split("--")
        editTasks(id)
    }
})

/* Event listener that will check if the task complete button was clicked.
   If the task complete button was clicked then the id to be edited will
   be passed to completeTasks.
 */  
eventHub.addEventListener("click", event => {
    if(event.target.id.startsWith("completeTasks")){
        const [prefix, id] = event.target.id.split("--")
        editTasks(id)
    }
})