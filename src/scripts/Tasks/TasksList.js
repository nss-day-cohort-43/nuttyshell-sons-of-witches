const eventHub = document.querySelector(".constainer")

import { useTasks, getTasks } from "./TasksProvider.js";
import {tasksHTML} from "./Tasks.js"


export const tasksList = () => {
    getTasks().then(() =>{
        const tasksArray = useTasks();
        render(tasksArray);
    })
}

eventHub.addEventListener("Task Selected", event =>{
    if(event.detail.taskMade !== "0"){ 
        const matchingTasks = useTasks().filter(tasksObj => {
            return tasksObj.colorId === event.detail.taskMade
        });
        render(matchingTasks)    

    }
    else render(useTasks())
    })
  

const render = (tasksArray) => {
    const domElement = document.querySelector(".tasksCards")
    let HTMLArray = tasksArray.map(tasksObj => {
        return tasksHTML(tasksObj);
    })
    domElement.innerHTML = HTMLArray.join("");
}