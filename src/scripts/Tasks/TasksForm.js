import { newContentTarget } from "./TasksList.js"

const contentTarget = document.querySelector(".tasks")

export const renderTasksForm = () => {
    contentTarget.innerHTML = `
    <section class="tasksContainer">
    <h3 class="tasksHeader">Task List</h3>
    <div class="tasksForm">
        <fieldset>
            <label>Title:</label>
            <input type="text" id="tasksTitle">
        </fieldset>

        <fieldset>
            <label>Summary:</label>
            <input type="text" id="tasksSummary">
        </fieldset>

        <fieldset>
            <label>Due Date:</label>
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
    </section>
`
}

export const editForm = (tasksObj) => {
    newContentTarget.innerHTML = `
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