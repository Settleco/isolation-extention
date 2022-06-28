/*
    Made by @rexulec & @kax675
    with <3
*/

const name = "Mert"; // Setting Name

let date = new Date();
let day = date.getDate();
let month = date.getMonth() + 1;
let year = date.getFullYear();
let hour = date.getHours();
let minute = date.getMinutes();

const dateElement = document.getElementById("date");
const nameElement = document.getElementById("name");
const hourElement = document.getElementById("hours");

setInterval(() => {
    date = new Date();
    day = date.getDate();
    month = date.getMonth() + 1;
    year = date.getFullYear();
    hour = date.getHours();
    minute = date.getMinutes();
} , 1000);

function stringifyMonth (month) {
    switch (month) {
        case 1:
            return "January";
        case 2:
            return "February";
        case 3:
            return "March";
        case 4:
            return "April";
        case 5:
            return "May";
        case 6:
            return "June";
        case 7:
            return "July";
        case 8:
            return "August";
        case 9:
            return "September";
        case 10:
            return "October";
        case 11:
            return "November";
        case 12:
            return "December";
    }
}

const dateString = `${day} ${stringifyMonth(month)}, ${year}`;
dateElement.innerHTML = dateString;
hourElement.innerHTML = `${hour}:${minute}`;

// --------------------- Greetning Msg --------------------- 
const welcomeMessageElement = document.getElementById("welcome-message");
if (hour < 12) { 
    welcomeMessageElement.innerHTML = "Günaydın, " + name + ".";
} else if (hour < 18) {
    welcomeMessageElement.innerHTML = "Tünaydın, " + name;
}
else {
    welcomeMessageElement.innerHTML = "İyi akşamlar, " + name;
}
// --------------------- Greetning Msg --------------------- 

//

let headers = new Headers();
headers.append('Access-Control-Allow-Origin', 'http://localhost:8080');
headers.append('Access-Control-Allow-Credentials', 'true');

fetch('https://api.genelpara.com/embed/kripto.json',{
    method: 'GET',
    mode: 'cors',
    credentials: 'include'
  })
  .then(response => response.json())
  .then(data => console.log(data))