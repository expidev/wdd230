//select HTML elements in the document
const currentTemp = document.querySelector('#current-temp');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('figcaption');
const url = 'api.openweathermap.org/data/3.0/onecall/timemachine?q=Fairbanks&units=imperials&appid={339137572c08a4f45a4749c0496b6807}';

async function apiFetch() {
    try {
        const response = await fetch(url);
        if (response.ok){
            const data = await response.json();
            console.log(data); //this is for testing the call
            //displayResults(data);
        } else {
            throw Error(await response.text());
        }
    } catch (error){
        console.error();
    }
}

apiFetch();

function displayResults(weatherdata){
    currentTemp.innerHTML =  `<strong>${parseInt(weatherData.main.temp.toFixed(0))}</strong>`;
    const iconsrc = `https://openweathermap.org/img/w/${weatherData.weather[0].icon}.png`;
    const desc = weatherData.weather[0].description.toUpperCase();

    weatherIcon.setAttribute('src', iconsrc);
    weatherIcon.setAttribute('alt', desc);
    captionDesc.textContent = desc;
}