        /*
        Made by @rexulec & @kax675
        with <3
    */
    
    
    const name = localStorage.getItem("name"); // Setting Name
    const yourLocation = localStorage.getItem("location"); // Setting Location
    const weatherapi = localStorage.getItem("weatherapi");
    if (name == null) {
        localStorage.setItem("name", "Guest");
    }
    if (yourLocation == null) {
        localStorage.setItem("location", "No Location");
    }
    
    function setSettings() {
        localStorage.setItem("name", nameInput.value);
        localStorage.setItem("location", locationInput.value);
        
        localStorage.setItem("weatherapi", weatherapiInput.value);
        window.location.reload();
    }
    
    
    const nameElement = document.getElementById("name");
    const hourElement = document.getElementById("hours");
    const settingsPopup = document.getElementById('settings-popup');
    const nameInput = document.getElementById("name-input");
    const locationInput = document.getElementById("city-input");
    const weatherapiInput = document.getElementById("api-input");
    
    const setcity = document.getElementById("city");
    setcity.innerHTML = yourLocation;
    
    
    function showSettings() {
        if (settingsPopup.style.display == "none") {
            settingsPopup.style.display = "flex";
        }
        else {
            settingsPopup.style.display = "none";
        }
    }
    function getTime() {
        var today = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: false });
        hourElement.innerHTML = today;
    }
    
    /*--------------*
    *               |  
    *Mertin odası   |
    *               | 
    ----------------*/
    
    
    let today = new Date();
    
    getTime()
    
    setInterval(() => {
        getTime()
    }, 500)
    
    
    // --------------------- START ---------------------
    const welcomeMessageElement = document.getElementById("welcome-message");
    if (today.getHours() < 12) {
        welcomeMessageElement.innerHTML = "Günaydın, " + name + ".";
    } else if (today.getHours() < 18) {
        welcomeMessageElement.innerHTML = "Tünaydın, " + name;
    }
    else {
        welcomeMessageElement.innerHTML = "İyi akşamlar, " + name;
    }
    // --------------------- END ---------------------
    
    
    // --------------------- START ---------------------
    
    const btc = document.getElementById("btc");
    const btcchange = document.getElementById("btcchange");
    fetch('https://api.coingecko.com/api/v3/coins/bitcoin?tickers=false&community_data=false&developer_data=false&sparkline=false', {
        headers: {
            'Access-Control-Allow-Origin': '*'
        },
    })
        .then(response => response.json())
        .then(data => {
            btc.innerHTML = Number.parseFloat(data.market_data.current_price.usd).toFixed(2)
            btcchange.innerHTML = Number.parseFloat(data.market_data.price_change_percentage_24h).toFixed(2)
            if (btcchange.innerHTML > 0) {
                btcchange.style.color = "#4AD161"
            } else {
                btcchange.style.color = "#ff3b30"
            }
        })
    
    const eth = document.getElementById("eth");
    const ethchange = document.getElementById("ethchange");
    fetch('https://api.coingecko.com/api/v3/coins/ethereum?tickers=false&community_data=false&developer_data=false&sparkline=false', {
        headers: {
            'Access-Control-Allow-Origin': '*'
        },
    })
        .then(response => response.json())
        .then(data => {
            eth.innerHTML = Number.parseFloat(data.market_data.current_price.usd).toFixed(2);
            ethchange.innerHTML = Number.parseFloat(data.market_data.price_change_percentage_24h).toFixed(2);
            if (ethchange.innerHTML > 0) {
                ethchange.style.color = "#4AD161"
            } else {
                ethchange.style.color = "#ff3b30"
            }
        })
    
    const ltc = document.getElementById("ltc");
    const ltcchange = document.getElementById("ltcchange");
    fetch('https://api.coingecko.com/api/v3/coins/litecoin?tickers=false&community_data=false&developer_data=false&sparkline=false', {
        headers: {
            'Access-Control-Allow-Origin': '*'
        },
    })
        .then(response => response.json())
        .then(data => {
            ltc.innerHTML = Number.parseFloat(data.market_data.current_price.usd).toFixed(2);
            ltcchange.innerHTML = Number.parseFloat(data.market_data.price_change_percentage_24h).toFixed(2);
            if (ltcchange.innerHTML > 0) {
                ltcchange.style.color = "#4AD161"
            } else {
                ltcchange.style.color = "#ff3b30"
            }
        })
    
    const doge = document.getElementById("doge");
    const dogechange = document.getElementById("dogechange");
    fetch('https://api.coingecko.com/api/v3/coins/dogecoin', {
        headers: {
            'Access-Control-Allow-Origin': '*'
        },
    })
        .then(response => response.json())
        .then(data => {
            doge.innerHTML = Number.parseFloat(data.market_data.current_price.usd).toFixed(4);
            dogechange.innerHTML = Number.parseFloat(data.market_data.price_change_percentage_24h).toFixed(2);
            if (dogechange.innerHTML > 0) {
                dogechange.style.color = "#4AD161"
            } else {
                dogechange.style.color = "#ff3b30"
            }
        })
    // --------------------- END ---------------------
    
    const weather = document.getElementById("weather");
    
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${yourLocation}&appid=${weatherapi}&units=metric`, {
    })
        .then(response => response.json())
        .then(data => {
            weather.innerHTML = Number.parseFloat(data.main.temp).toFixed(0) + "°C"
        })