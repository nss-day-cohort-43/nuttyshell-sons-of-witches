
export const WeatherHTML = (weatherObj) => {
    return `
        <section class="weather-card"> 
        <div id="weather-forcast">
            <div>Park Name: ${weatherObj.name}</div>
            <div>Temperature: ${weatherObj.temp}</div>
            <div>Forcast: ${weatherObj.forcast}</div>
            <div>${new Date(weatherObj.date).toLocaleDateString('en-US')}</div>
        </section>
    `
};