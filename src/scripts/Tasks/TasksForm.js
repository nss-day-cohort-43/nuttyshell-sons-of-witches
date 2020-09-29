import { saveTasks } from "./TasksDataProvider.js"

const eventHub = document.querySelector(".container")
const contentTarget = document.querySelector(".tasks")



/* Function that adds a form to the display.
*/
export const renderTasksForm = () => {
    contentTarget.innerHTML = `
    <h2>Create a Task:</h2>
    <div class="tasksForm">
        <fieldset>
            <label>Title</label>
            <input type="text" id="tasksTitle">
        </fieldset>

        <fieldset>
            <label>Summary</label>
            <input type="text" id="tasksSummary">
        </fieldset>

        <fieldset>
            <label>Due Date</label>
            <input type="text" id="tasksDueDate">
        </fieldset>

        <fieldset>
            <button id="tasksSaveBtn">Save</button>
        </fieldset>

        </div>

        <h2>Current Tasks:</h2>
        <div id="tasksList"></div> 

        <h2>Completed Task:</h2>
        <div id="completedTasks"></div>
        
`
}


/* Event Listener that will pass an object to the saveTasks
   function if the target.id is equal to the ID of tasksSaveBtn
*/ 
   
eventHub.addEventListener("click", event => {
    if(event.target.id === "tasksSaveBtn"){
        const newTasksObj = {
            userId: parseInt(sessionStorage.getItem("userId")),
            title: document.querySelector("#tasksTitle").value,
            summary: document.querySelector("#tasksSummary").value,
            date: document.querySelector("#tasksDueDate").value,
            complete: false
        }
        saveTasks(newTasksObj)
    }
})