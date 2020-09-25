const eventHub = document.querySelector(".container")

const dispatchStateChangeEvent = () => {
    const tasksStateChangedEvent = new CustomEvent("tasksStateChanged")
}

let tasks = []

export const useTasks = () => {
    return tasks.slice()
}

export const getTasks = () => {
    return fetch(`http://local:8088/tasks`)
        .then(response => response.json)
        .then(parsedTasks => {
            tasks = parsedTasks
        })
}

export const savetasks = (tasksObj) => {
    return(`http://local:8088/tasks`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(tasksObj)
    })
    .then(getTasks)
    .then(dispatchStateChangeEvent)
}