//Last modified on the footer

const currentDate = new Date();
document.querySelector('#currentYear').textContent = currentDate.getFullYear();

const lastModif = new Date(document.lastModified);
const setDate = `${lastModif.getFullYear()}/${lastModif.getMonth() + 1}/${lastModif.getDate()} ${lastModif.getHours()}:${lastModif.getMinutes()}:${lastModif.getSeconds()}`;
document.querySelector('#lastUpdated').textContent = setDate;

//toggle Menu
const toggleMenu = () => {
    document.querySelector('#menu').classList.toggle('open');
}

document.querySelector('#toggleMenu').addEventListener('click', toggleMenu);

//Current Date
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
let fulldate = dayName + "," + " " + currentDate.getDate() + " " + monthName + " " + year;
document.querySelector("#currentDate").textContent = fulldate;

//banner
const bannerMessage = document.querySelector('#banner');
if (currentDate.getDay()<4 && currentDate.getDay()>0){
    bannerMessage.innerHTML = "Don't forget our weekly meeting on Wednesdays at 9 AM ";
    bannerMessage.style.backgroundColor = "burlywood";
}



//calculate the wind chill

const currentTemp = document.querySelector("#temperature");
const windSpeed = document.querySelector("#windSpeed");
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('figcaption');
const url = 'api.openweathermap.org/data/3.0/onecall/?&long=18.8792&lat=47.5079&units=imperials&appid={339137572c08a4f45a4749c0496b6807}';

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
    windSpeed = `<strong>${weatherData.wind.speed}</strong>`;
    const iconsrc = `https://openweathermap.org/img/w/${weatherData.weather[0].icon}.png`;
    const desc = weatherData.weather[0].description.toUpperCase();
    weatherIcon.setAttribute('src', iconsrc);
    weatherIcon.setAttribute('alt', desc);
    captionDesc.textContent = desc;

    if (currentTemp <=50 && windSpeed > 3.0){
        let windChill = 35.74 + 0.6215*t - 35.75*(s**0.16) + 0.4275*t*(s**0.16);
        document.querySelector("#windChill").innerHTML = parseInt(windChill);
    }
    else{
        document.querySelector("#windChill").innerHTML = "N/A";
    }
}

// Calculate the number of the days that the user visits the site
const visitsDisplay = document.querySelector(".visits");
const todayDate = Date.parse(new Date());

let lastVisits = Number(window.localStorage.getItem("lastdate"));
if (lastVisits !== 0){
    const dayCount = parseInt((todayDate - lastVisits)*0.001*(1/86400));
    if (dayCount > 1) {
        visitsDisplay.textContent = `You visited us ${dayCount} days ago`;
    } else if(dayCount == 1) {
        visitsDisplay.textContent = `You visited us a day ago`;
    } else {
        visitsDisplay.textContent = "You are visiting us today!";
    }
}


localStorage.setItem("lastdate", todayDate);

//creating company spotlight
const requestURL = '../lesson9/data/data.json';
let random1 =0;
let random2 =0;
let random3 =0;
const compare = function(){
    while (random1 == random2 || random1 == random3 || random2 == random3){
      random1 = Math.floor(Math.random() * 9);
      random2 = Math.floor(Math.random() * 9);
      random3 = Math.floor(Math.random() * 9);
    }
}
compare();

//function to create the grid content
function addSpotlight() {
    fetch(requestURL).then(function (response) {
      return response.json();
    }).then(function (jsonObject) {
      const directories = jsonObject['directory'];
      addCard(directories[random1],".companySpotlight01");
      addCard(directories[random2],".companySpotlight02");
      addCard(directories[random3],".companySpotlight03");

    });
    
    function addCard(directory, spotlight) {
        const card = document.querySelector(spotlight);
        let h2 = document.createElement('h2');
        let imageur = document.createElement("img");
        let lineBreak = document.createElement("hr");
        let  addresse = document.createElement("p");
        let phoneNumber = document.createElement("p");
        let url = document.createElement("a");
        imageur.setAttribute('src', directory.img);
        imageur.setAttribute('loading', 'lazy');
        imageur.setAttribute('alt', `Representation of the ${directory.name} organization.`);
        h2.textContent = directory.name;
        addresse.textContent = directory.address;
        phoneNumber.textContent = directory.phonenumber;
        url.textContent = directory.URL;
        url.setAttribute('href', directory.URL)
        card.appendChild(h2);
        card.appendChild(imageur);
        card.appendChild(lineBreak);
        card.appendChild(addresse);
        card.appendChild(phoneNumber);
        card.appendChild(url);
    }
}

addSpotlight();

