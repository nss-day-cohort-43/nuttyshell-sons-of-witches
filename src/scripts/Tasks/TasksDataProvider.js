import { tasksList } from "./TasksList.js"

const eventHub = document.querySelector(".container")



/* Creation of custom event which allows a refresh to happen
    without the user hitting the refresh command
*/
const dispatchStateChangeEvent = () => {
    const tasksStateChangedEvent = new CustomEvent("tasksStateChanged")
    
    eventHub.dispatchEvent(tasksStateChangedEvent)
}

eventHub.addEventListener("tasksStateChanged", event => {
    tasksList()
})


let tasks

/* Function that fetches the tasks from the database.
    This function also sets the returned information equal
    to tasks
 */
export const getTasks = () => {
    return fetch(`http://localhost:8088/tasks?_expand=user`)
        .then(response => response.json())
        .then(parsedTasks => {
            tasks = parsedTasks
        })
}

/* Function that POST new information to the database.
    After posting to the database the function calls for 
    the getTasks function and for the dispatchStateChangeEvent 
    function to be run.
 */
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

/* Function that takes the tasks and makes a copy to be used */
export const useTasks = () => {
    return tasks.slice()
}

/* Function that deletes a task from the database.
    Then calls for the tasks with the getTasks function.
    Then calls for the dispatchStateChangeEvent function. */
export const deleteTasks = (id) => {
    return fetch(`http://localhost:8088/tasks/${id}`, {
        method: 'DELETE'
    })
    .then(getTasks)
    .then(dispatchStateChangeEvent)
}

/* Function that edits a task from the database.
    Then calls for the tasks with the getTasks function.
    Then calls for the dispatchStateChangeEvent function. 
*/
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
.then(json => console.log(json))
.then(getTasks)
.then(dispatchStateChangeEvent)
}

/* Function that changes the stastus of a task from the database.
    Then calls for the tasks with the getTasks function.
    Then calls for the dispatchStateChangeEvent function. 
    This should move the task from the from the ongoingTasks box to
    the completedTasks box. 
*/
// export const completeTasks = (tasksObj, id) => {
//     return fetch(`http://localhost:8088/tasks/${id}`, {
//     method: "PUT",
//     headers: {
//       "Content-Type": "application/json"
//     },
//     body: JSON.stringify(tasksObj)
//   })
//   .then(getTasks)
//   .then(dispatchStateChangeEvent)
// }