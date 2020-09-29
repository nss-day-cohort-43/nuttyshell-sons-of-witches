import { getWeather, useWeather } from "./weatherDataProvider.js";

const eventHub = document.querySelector(".dashboard");

//
eventHub.addEventListener("click", clickEvent => {
    if (clickEvent.target.textContent === "Show Weather") {
        const [prefix, id] = clickEvent.target.id.split("--")
        const 
    }

})