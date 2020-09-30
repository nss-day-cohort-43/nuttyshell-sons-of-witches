import { tasksList } from "./TasksList.js"

const eventHub = document.querySelector(".container")

let tasks

export const tasksDispatchStateChangeEvent = () => {
    const tasksStateChangedEvent = new CustomEvent("tasksStateChanged")  
    eventHub.dispatchEvent(tasksStateChangedEvent)
}
    eventHub.addEventListener("tasksStateChanged", event => {
        tasksList()
})
// o0o0o0o0o0o0o0o0oo0o0o0o0o0o0o0o0o0o0o0o0o0o0o0o0o0o
// o0o0o0o0o0o0o0o0oo0o0o0o0o0o0o0o0o0o0o0o0o0o0o0o0o0o
// o0o0o0o0o0o0o0o0oo0o0o0o0o0o0o0o0o0o0o0o0o0o0o0o0o0o
// o0o0o0o0o0o0o0o0oo0o0o0o0o0o0o0o0o0o0o0o0o0o0o0o0o0o
export const getTasks = () => {
    return fetch(`http://localhost:8088/tasks?_expand=user`)
        .then(response => response.json())
        .then(parsedTasks => {
            tasks = parsedTasks
            // .filter(tasks.complete === false)
        })
}

// let isTaskComplete = tasks.filter(tasksFilter)

// // api
// let tasks = [
//     { complete: true }]
// // api

//     function tasksFilter() {
//         if (tasks.complete === true) {
//             return
//         } 

// o0o0o0o0o0o0o0o0oo0o0o0o0o0o0o0o0o0o0o0o0o0o0o0o0o0o
// o0o0o0o0o0o0o0o0oo0o0o0o0o0o0o0o0o0o0o0o0o0o0o0o0o0o
// o0o0o0o0o0o0o0o0oo0o0o0o0o0o0o0o0o0o0o0o0o0o0o0o0o0o
// o0o0o0o0o0o0o0o0oo0o0o0o0o0o0o0o0o0o0o0o0o0o0o0o0o0o
// o0o0o0o0o0o0o0o0oo0o0o0o0o0o0o0o0o0o0o0o0o0o0o0o0o0o
    // // if else filter by complete in useTasks or new function
    // const words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];

    // const result = words.filter(word => word.length > 6);

export const useTasks = () => {
    return tasks.filter(task => task.complete === false)
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
    .then(tasksDispatchStateChangeEvent)
}

export const deleteTasks = (id) => {
    return fetch(`http://localhost:8088/tasks/${id}`, {
        method: 'DELETE'
    })
    .then(getTasks)
    .then(tasksDispatchStateChangeEvent)
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
.then(tasksDispatchStateChangeEvent)
}

// o0o0o0o0o0o0o0o0oo0o0o0o0o0o0o0o0o0o0o0o0o0o0o0o0o0o
// o0o0o0o0o0o0o0o0oo0o0o0o0o0o0o0o0o0o0o0o0o0o0o0o0o0o
// o0o0o0o0o0o0o0o0oo0o0o0o0o0o0o0o0o0o0o0o0o0o0o0o0o0o
// o0o0o0o0o0o0o0o0oo0o0o0o0o0o0o0o0o0o0o0o0o0o0o0o0o0o
// o0o0o0o0o0o0o0o0oo0o0o0o0o0o0o0o0o0o0o0o0o0o0o0o0o0o

export const completeTasks = (id) => {
    return fetch(`http://localhost:8088/tasks/${id}`, {
        method: "PATCH",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            complete: true,       
        }),
    })
    .then(response => response.json())
    .then(getTasks)
    .then(tasksDispatchStateChangeEvent);
};





// o0o0o0o0o0o0o0o0oo0o0o0o0o0o0o0o0o0o0o0o0o0o0o0o0o0o
// o0o0o0o0o0o0o0o0oo0o0o0o0o0o0o0o0o0o0o0o0o0o0o0o0o0o
// o0o0o0o0o0o0o0o0oo0o0o0o0o0o0o0o0o0o0o0o0o0o0o0o0o0o
// o0o0o0o0o0o0o0o0oo0o0o0o0o0o0o0o0o0o0o0o0o0o0o0o0o0o
// o0o0o0o0o0o0o0o0oo0o0o0o0o0o0o0o0o0o0o0o0o0o0o0o0o0o
// o0o0o0o0o0o0o0o0oo0o0o0o0o0o0o0o0o0o0o0o0o0o0o0o0o0o
// o0o0o0o0o0o0o0o0oo0o0o0o0o0o0o0o0o0o0o0o0o0o0o0o0o0o