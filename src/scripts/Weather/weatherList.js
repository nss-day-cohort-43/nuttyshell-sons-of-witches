import { getWeather, useWeather } from "./WeatherDataProvider.js";

const targetElement = document.querySelector(".weatherPreview");
const eventHub = document.querySelector(".dashboard");

// A event Listener that listens for the Show Weather button to be clicked
eventHub.addEventListener("click", clickEvent => {
    if (clickEvent.target.textContent === "Show Weather") {
        const [prefix, id] = clickEvent.target.id.split("--")
        const
    }

})

// Render weather forcast initally
export const weatherList = () => {
    getWeather()
        .then(renderWeather)
};

// renders the weatherHTML to the Dom
const renderWeather = (appWeather) => {

    let HTMLArray = appWeather.map(weatherObj => {
        return WeatherHTML(weatherObj);
    })
    targetElement.innerHTML = HTMLArray.join("")
};