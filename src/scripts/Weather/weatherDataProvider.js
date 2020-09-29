import { keys } from "../Settings.js";
import { useEvents } from "../Events/EventsDataProvider.js";

const eventHub = document.querySelector(".dashboard");

let weather = [];

// creates a copy of an array
export const useWeather = () => {
    return weather.slice()
};

//function get the weather from the Api 
export const getWeather = (obj) => {
    return fetch(`https://api.openweathermap.org/data/2.5/forecast?zip=${weatherObj.zip},us&units=imperial&appid=${keys.weatherKey}`)
        .then(response => response.json())
        .then(parsedWeather => {
            weather = parsedWeather.list
        })
};

// gets forcast from the weather Api and assigns an arrgument to the weather variable
export const getCurrentWeather = (postalCode) => {
    let userEvents = useEvents()
    const target = userEvents.find(event => {
        return event.postalCode === document.querySelector("").value
    })
    return fetch(`https://api.openweathermap.org/data/2.5/forecast?&units=imperial&zip=${target.addresses[0].postalCode}&appid=${keys.weatherKey}`)
        .then(response => response.json())
        .then(parsedWeather => {
            weather = parsedWeather.list
        })
};