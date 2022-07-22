//Current Date
const currentDate = new Date();
let dayWeeks = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
];
let months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
];

let dayName = dayWeeks[currentDate.getDay()];
let monthName = months[currentDate.getMonth()];
let year = currentDate.getFullYear();
document.querySelector("#currentDate").textContent = dayName + "," + " " + currentDate.getDate() + " " + monthName + " " + year;;
document.querySelector("#currentDate").textContent = dayName + "," + " " + currentDate.getDate() + " " + monthName + " " + year;;


//weather
const currentTemp = document.querySelector("#temperature");
const humidy = document.querySelector("#humidity");
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('figcaption');
const rurl = 'https://api.openweathermap.org/data/2.5/weather?q=Antananarivo&units=imperial&appid=f10b0fcc44e85c257ff64d32dd943f1f';

async function apiFetch() {
    try {
        const response = await fetch(rurl);
        if (response.ok){
            const data = await response.json();
            console.log(data); //this is for testing the call
            displayResults(data);
        } else {
            throw Error(await response.text());
        }
    } catch (error){
        console.error();
    }
}

apiFetch();

function displayResults(weatherData){
    currentTemp.innerHTML =  `<strong>${weatherData.main.temp.toFixed(0)}</strong>`;
    humidity.innerHTML = `<strong>${weatherData.main.humidity}</strong>`;
    const iconsrc = `https://openweathermap.org/img/w/${weatherData.weather[0].icon}.png`;
    const desc = weatherData.weather[0].description;
    weatherIcon.setAttribute('src', iconsrc);
    weatherIcon.setAttribute('alt', desc);
    captionDesc.textContent = desc;
}

const dayTemp1 = document.querySelector("#dayTemp1");
const dayTemp2 = document.querySelector("#dayTemp2");
const dayTemp3 = document.querySelector("#dayTemp3");

const furl = 'https://api.openweathermap.org/data/2.5/forecast?q=Antananarivo&units=imperial&appid=f10b0fcc44e85c257ff64d32dd943f1f';

async function apiFetchforecast() {
    try {
        const response = await fetch(furl);
        if (response.ok){
            const data = await response.json();
            console.log(data); //this is for testing the call
            displayForecast(data);
        } else {
            throw Error(await response.text());
        }
    } catch (error){
        console.error();
    }
}

apiFetchforecast();


function displayForecast(weatherData){
    const date1 = new Date(weatherData.list[8].dt_txt);
    const date2 = new Date(weatherData.list[16].dt_txt);
    const date3 = new Date(weatherData.list[24].dt_txt);
    document.querySelector("#day1").textContent = dayWeeks[date1.getDay()] + "," + " " + date1.getDate() + " " + months[date1.getMonth()] + " " + date1.getFullYear();
    document.querySelector("#day2").textContent = dayWeeks[date2.getDay()] + "," + " " + date2.getDate() + " " + months[date2.getMonth()] + " " + date2.getFullYear();
    document.querySelector("#day3").textContent = dayWeeks[date3.getDay()] + "," + " " + date3.getDate() + " " + months[date3.getMonth()] + " " + date3.getFullYear();
    dayTemp1.innerHTML =  `<strong>${weatherData.list[8].main.temp.toFixed(0)}</strong>`;
    dayTemp2.innerHTML =  `<strong>${weatherData.list[16].main.temp.toFixed(0)}</strong>`;
    dayTemp3.innerHTML =  `<strong>${weatherData.list[24].main.temp.toFixed(0)}</strong>`;
}


