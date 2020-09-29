import { tasksList } from "./TasksList.js"

const eventHub = document.querySelector(".container")

let tasks

const dispatchStateChangeEvent = () => {
    const tasksStateChangedEvent = new CustomEvent("tasksStateChanged")  
    eventHub.dispatchEvent(tasksStateChangedEvent)
}
    eventHub.addEventListener("tasksStateChanged", event => {
        tasksList()
})

export const getTasks = () => {
    return fetch(`http://localhost:8088/tasks?_expand=user`)
        .then(response => response.json())
        .then(parsedTasks => {
            tasks = parsedTasks
        })
}

export const useTasks = () => {
    return tasks.slice()
}

export const saveTasks = (tasksObj) => {
    return fetch(`http://localhost:8088/tasks`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(tasksObj)
    })
    .then(getTasks)
    .then(dispatchStateChangeEvent)
}

export const deleteTasks = (id) => {
    return fetch(`http://localhost:8088/tasks/${id}`, {
        method: 'DELETE'
    })
    .then(getTasks)
    .then(dispatchStateChangeEvent)
}

export const editTasks = (id, title, summary, date) => {
    return fetch(`http://localhost:8088/tasks/${id}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
    title: title,
    summary: summary,
    date: date
    })
})
.then(response => response.json())
.then(getTasks)
.then(dispatchStateChangeEvent)
}

export const completeTasks = () => {

}