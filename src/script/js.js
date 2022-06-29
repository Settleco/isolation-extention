/*
    Made by @rexulec & @kax675
    with <3
*/

const name = "Mert"; // Setting Name

let date = new Date();
let hour = date.getHours();
let minute = date.getMinutes();

const nameElement = document.getElementById("name");
const hourElement = document.getElementById("hours");

setInterval(() => {
    date = new Date();
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

hourElement.innerHTML = `${hour}:${minute}`;

// --------------------- START ---------------------
const welcomeMessageElement = document.getElementById("welcome-message");
if (hour < 12) { 
    welcomeMessageElement.innerHTML = "Günaydın, " + name + ".";
} else if (hour < 18) {
    welcomeMessageElement.innerHTML = "Tünaydın, " + name;
}
else {
    welcomeMessageElement.innerHTML = "İyi akşamlar, " + name;
}
// --------------------- END ---------------------


// --------------------- START ---------------------

const btc = document.getElementById("btc");
const btcchange = document.getElementById("btcchange");
fetch('https://api.coingecko.com/api/v3/coins/bitcoin?tickers=false&community_data=false&developer_data=false&sparkline=false',{
    headers : {
        'Access-Control-Allow-Origin': '*'
    },
  })
  .then(response => response.json())
  .then(data => {
    btc.innerHTML = Number.parseFloat(data.market_data.current_price.usd).toFixed(2)
    btcchange.innerHTML = Number.parseFloat(data.market_data.price_change_percentage_24h).toFixed(2)
  })

const eth = document.getElementById("eth");
const ethchange = document.getElementById("ethchange");
fetch('https://api.coingecko.com/api/v3/coins/ethereum?tickers=false&community_data=false&developer_data=false&sparkline=false',{
    headers : {
        'Access-Control-Allow-Origin': '*'
    },
  })
  .then(response => response.json())
  .then(data => {
    eth.innerHTML = Number.parseFloat(data.market_data.current_price.usd).toFixed(2);
    ethchange.innerHTML = Number.parseFloat(data.market_data.price_change_percentage_24h).toFixed(2);
  })

  const ltc = document.getElementById("ltc");
  const ltcchange = document.getElementById("ltcchange");
  fetch('https://api.coingecko.com/api/v3/coins/litecoin?tickers=false&community_data=false&developer_data=false&sparkline=false',{
    headers : {
        'Access-Control-Allow-Origin': '*'
    },
    })
    .then(response => response.json())
    .then(data => {
        ltc.innerHTML = Number.parseFloat(data.market_data.current_price.usd).toFixed(2);
        ltcchange.innerHTML = Number.parseFloat(data.market_data.price_change_percentage_24h).toFixed(2);
    })

    const doge = document.getElementById("doge");
    const dogechange = document.getElementById("dogechange");
    fetch('https://api.coingecko.com/api/v3/coins/dogecoin',{
        headers : {
            'Access-Control-Allow-Origin': '*'
        },
      })
      .then(response => response.json())
      .then(data => {
        doge.innerHTML = Number.parseFloat(data.market_data.current_price.usd).toFixed(4);
        dogechange.innerHTML = Number.parseFloat(data.market_data.price_change_percentage_24h).toFixed(2);
      })
// --------------------- END ---------------------
const spotifytitle = document.getElementById("spotifytitle");
const spotifyartist = document.getElementById("spotifyartist"); 

function spotifyData(token){
    fetch('https://api.spotify.com/v1/me/player/currently-playing?limit=1',{
    headers : {
        'Authorization': token
    }
  })
  .then(response => response.json())
  .then(data => {
    spotifytitle.innerHTML = data.item.name;
    spotifyartist.innerHTML = data.item.album.artists[0].name;
    console.log(data);
  })
}

setInterval( () => {
    spotifyData("Bearer BQDSYpAb5t29Y7ul7QymB5j1W3-zCR2Qy7Fb3LiTbFKJem7fDUS4wGX9G9UZmJz5hrYXspCDC2thjzYA_AlV0P6K3R5tT5z9eZfgGvgzXYg84h5sutkoam8Gi1XJS9eR8GyB8ilA_hA1W29AV9vpxjoMnylBB_stUZFeYVPUKbj_2eyiMPNzsgtRYMaHxly3UDWAbnx72qI")
},5000)