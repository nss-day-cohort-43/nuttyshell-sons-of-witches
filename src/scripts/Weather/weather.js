// The rendering of HTML weather forecast 
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