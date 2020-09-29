import { saveTasks, getTasks, useTasks, deleteTasks, editTasks, completeTasks } from "./TasksDataProvider.js"
import { editForm } from "./tasksForm.js"

const eventHub = document.querySelector(".container")

export let newContentTarget
 
export const tasksList = () => {
    getTasks()
    .then(render)
}

const tasksHTML = (tasksObj) => {
    return `
        <div>Title: ${tasksObj.title}</div>
        <div>Summary: ${tasksObj.summary}</div>
        <div>Due Date: ${tasksObj.date}</div>
        ${checkUserId(tasksObj)}
        <p>
    `
}

const render = () => {
    const contentTarget = document.querySelector("#tasksList")
    contentTarget.innerHTML = useTasks().map(tasks => {
        return tasksHTML(tasks)
    }).join("")
}
      
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

eventHub.addEventListener("click", event => {
    if(event.target.id.startsWith("deleteTasks")){
        const [prefix, id] = event.target.id.split("--")
        deleteTasks(id)
    }
})

eventHub.addEventListener("click", event => {
    if (event.target.id.startsWith("editTasks")) {
        const [prefix, id] = event.target.id.split("--")
        let x = useTasks().find(tasks => {
            return parseInt(tasks.id) === parseInt(id)
        })
        newContentTarget = document.querySelector(`#editFormTarget--${id}`)
        editForm(x)
    }
})

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

eventHub.addEventListener("click", event => {
    if(event.target.id === "editCancel"){
        tasksList()
    }
})



eventHub.addEventListener("click", event => {
    if(event.target.id === "taskComplete"){

    }
})
