import { keys } from "../Settings.js";

let weather = [];

// creates a copy of an array
export const useWeather = () => {
    return weather.slice();
};

//function get the weather from the Api 
export const getWeather = () => {
    return fetch(``)
        .then(response => response.json())
        .then(parsedWeather => {
            weather = parsedWeather.list
        })
};


