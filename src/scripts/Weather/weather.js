//A function that uses the argument from the renderWeather function in weatherList.js and creates the the HTML form using the info. that was given as an argument.
export const WeatherHTML = (weatherObj) => {
    return `
        <section class="weather-card"> 
        <div id="weather-forcast">
            <div>High: ${weatherObj.main.temp}</div>
            <div>Low: ${weatherObj.main.temp}</div>
            <div>Forcast: ${weatherObj.main.forcast}</div>
            <div>${new Date(weatherObj.date).toLocaleDateString('en-US')}</div>
        </section>
    `
};