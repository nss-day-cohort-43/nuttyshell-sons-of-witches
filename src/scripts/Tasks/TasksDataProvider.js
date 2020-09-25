const eventHub = document.querySelector(".dashboard")

const dispatchStateChangeEvent = () => {
    const tasksStateChangedEvent = new CustomEvent("tasksStateChanged")
}

let tasks = []

export const useTasks = () => {
    return tasks.slice()
}

export const gettasks = () => {
    return fetch(`http://local:8088/tasks`)
        .then(response => response.json)
        .then(parsedTasks => {
            taskss = parsedTasks
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