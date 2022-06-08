<<<<<<< HEAD
//Last modified on the footer

const currentDate = new Date();
document.querySelector('#currentYear').textContent = currentDate.getFullYear();

const lastModif = new Date(document.lastModified);
const setDate = `${lastModif.getFullYear()}/${lastModif.getMonth() + 1}/${lastModif.getDate()} ${lastModif.getHours()}:${lastModif.getMinutes()}:${lastModif.getSeconds()}`;
document.querySelector('#lastUpdated').textContent = setDate;

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
    ]

let dayName = dayWeeks[currentDate.getDay()];
let monthName = months[currentDate.getMonth()];
let year = currentDate.getFullYear();
let fulldate = dayName + "," + " " + currentDate.getDate() + " " + monthName + " " + year;
document.querySelector("#currentDate").textContent = fulldate;

//toggle Menu
const toggleMenu = () => {
    document.querySelector('#menu').classList.toggle('open');
}

document.querySelector('#toggleMenu').addEventListener('click', toggleMenu);

//calculate the wind chill

let t = parseInt(document.querySelector("#temperature").innerHTML);
let s = parseInt(document.querySelector("#windSpeed").innerHTML);
if (t <=50 && s > 3.0){
    let windChill = 35.74 + 0.6215*t - 35.75*(s**0.16) + 0.4275*t*(s**0.16);
    document.querySelector("#windChill").innerHTML = parseInt(windChill);
}
else{
    document.querySelector("#windChill").innerHTML = "N/A";
}
=======

//Last modified on the footer

const currentDate = new Date();
document.querySelector('#currentYear').textContent = currentDate.getFullYear();

const lastModif = new Date(document.lastModified);
const setDate = `${lastModif.getFullYear()}/${lastModif.getMonth() + 1}/${lastModif.getDate()} ${lastModif.getHours()}:${lastModif.getMinutes()}:${lastModif.getSeconds()}`;
document.querySelector('#lastUpdated').textContent = setDate;

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
    ]

let dayName = dayWeeks[currentDate.getDay()];
let monthName = months[currentDate.getMonth()];
let year = currentDate.getFullYear();
let fulldate = dayName + "," + " " + currentDate.getDate() + " " + monthName + " " + year;
document.querySelector("#currentDate").textContent = fulldate;

//toggle Menu
const toggleMenu = () => {
    document.querySelector('#menu').classList.toggle('open');
}

document.querySelector('#toggleMenu').addEventListener('click', toggleMenu);

//calculate the wind chill

let t = parseInt(document.querySelector("#temperature").innerHTML);
let s = parseInt(document.querySelector("#windSpeed").innerHTML);
if (t <=50 && s > 3.0){
    let windChill = 35.74 + 0.6215*t - 35.75*(s**0.16) + 0.4275*t*(s**0.16);
    document.querySelector("#windChill").innerHTML = parseInt(windChill);
}
else{
    document.querySelector("#windChill").innerHTML = "N/A";
}
>>>>>>> 6b5f65ad2d7dcc9a4b4669a889ebc75ecf0369a8
