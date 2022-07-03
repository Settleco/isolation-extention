        /*
        Made by @rexulec & @kax675
        with <3
    */
    
    
        const name = localStorage.getItem("name"); // Setting Name
        const yourLocation = localStorage.getItem("location"); // Setting Location
        const weatherapi = localStorage.getItem("weatherapi");
        if (!name) {
            localStorage.setItem("name", "Guest");
        }
    
        if (!yourLocation || yourLocation == "undefined") {
            fetch("https://ipinfo.io/json").then(function (response) {
                return response.json();
            }).then(function (data) {
                localStorage.setItem("location", data.city);
                window.location.reload();
            });
        }
        
        function setSettings() {
            localStorage.setItem("name", nameInput?.value  || localStorage.getItem("name") || undefined);
            localStorage.setItem("location", (locationInput?.value).toLowerCase() || localStorage.getItem("location") || undefined);
            localStorage.setItem("weatherapi", weatherapiInput?.value || localStorage.getItem("weatherapi") || undefined);
            window.location.reload();
        }

        function add() {
            if (!urlInput?.value || !urlNameInput?.value) return
            if (!localStorage.getItem("urls")) localStorage.setItem("urls", "[]");
            let data = JSON.parse(localStorage.getItem("urls"))
            
            data.push({
                name: urlNameInput?.value,
                url: urlInput?.value,
            })
            localStorage.setItem("urls", JSON.stringify(data))
        
            document.getElementById('fav').insertAdjacentHTML('afterbegin', 
            `
            <div class="">
            <a href="#" class="grid justify-items-center space-y-1">
                <img  width="32" height="32" src="https://icon.horse/icon/${(urlInput?.value).replace("https://", "").replace("www.", "").replace("http://", "")}" alt="${urlInput?.value}">
                <p class="font-medium">${firstUpperCase(urlNameInput?.value)}</p>
            </a>
            </div>
            `)
            
        }

        let urldata = JSON.parse(localStorage.getItem("urls") || "[]");
        
        urldata.forEach(element => {
            document.getElementById('fav').insertAdjacentHTML('afterbegin', 
            `
            <div class="">
            <a href="#" class="grid justify-items-center space-y-1">
                <img width="32" height="32" src="https://icon.horse/icon/${(element?.url).replace("https://", "").replace("www.", "").replace("http://", "")}" alt="${element?.url}">
                <p class="font-medium">${firstUpperCase(element?.name)}</p>
            </a>
            </div>
            `)
        });

        function delete_urls() {
            let data = JSON.parse(localStorage.getItem("urls"))
            let dataNew = []
            data.forEach(element => {
                if (element.name == "github") return
                dataNew.push(element)
            });
            localStorage.setItem("urls", JSON.stringify(dataNew))
        }
        delete_urls();
        
        
        const nameElement = document.getElementById("name");
        const hourElement = document.getElementById("hours");
        const settingsPopup = document.getElementById('settings-popup');
        const shortPopup = document.getElementById('settings-short-popup');
        const nameInput = document.getElementById("name-input");
        const urlInput = document.getElementById("url-input");
        const urlNameInput = document.getElementById("url-name-input");
        const locationInput = document.getElementById("city-input");
        const weatherapiInput = document.getElementById("api-input");
        
        const setcity = document.getElementById("city");
        setcity.innerHTML = firstUpperCase(yourLocation);
    
        document.getElementById("settings-button").addEventListener('click', showSettings);
        document.getElementById("close-button").addEventListener('click', showSettings);

        document.getElementById("settings-short-button").addEventListener('click', showShorts);
        document.getElementById("settings-short-button").addEventListener('click', showShorts);

        document.getElementById("setSettings-button").addEventListener('click', setSettings);
        document.getElementById("addUrls-button").addEventListener('click', add);
    
        function showSettings() {
            if (settingsPopup.style.display == "none") {
                settingsPopup.style.display = "flex";
            }
            else {
                settingsPopup.style.display = "none";
            }
        }

        function showShorts() {
            if (shortPopup.style.display == "none") {
                shortPopup.style.display = "flex";
            }
            else {
                shortPopup.style.display = "none";
            }
        }

        function getTime() {
            var today = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: false });
            hourElement.innerHTML = today;
        }    
        
        let today = new Date();
        
        getTime()
        
        setInterval(() => {
            getTime()
        }, 1000)
        
        
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
        
        function weather(yourLocation, weatherapi) {
            const images = {
                "01d": "https://www.gstatic.com/images/icons/material/apps/weather/2x/sunny_dark_color_96dp.png",
                "01n": "https://www.gstatic.com/images/icons/material/apps/weather/2x/clear_night_dark_color_96dp.png",
                "02d": "http://www.gstatic.com/images/icons/material/apps/weather/2x/partly_cloudy_dark_color_96dp.png",
                "02n": "http://www.gstatic.com/images/icons/material/apps/weather/2x/partly_cloudy_night_dark_color_96dp.png",
                "03d": "http://www.gstatic.com/images/icons/material/apps/weather/2x/cloudy_dark_color_96dp.png",
                "03n": "http://www.gstatic.com/images/icons/material/apps/weather/2x/mostly_cloudy_night_dark_color_96dp.png",
                "04d": "http://www.gstatic.com/images/icons/material/apps/weather/2x/partly_cloudy_dark_color_96dp.png",
                "04n": "http://www.gstatic.com/images/icons/material/apps/weather/2x/partly_cloudy_night_dark_color_96dp.png",
                "09d": "http://www.gstatic.com/images/icons/material/apps/weather/2x/showers_rain_dark_color_96dp.png",
                "09n": "http://www.gstatic.com/images/icons/material/apps/weather/2x/scattered_showers_night_dark_color_96dp.png",
                "10d": "http://www.gstatic.com/images/icons/material/apps/weather/2x/showers_rain_dark_color_96dp.png",
                "10n": "http://www.gstatic.com/images/icons/material/apps/weather/2x/scattered_showers_night_dark_color_96dp.png",
                "11d": "http://www.gstatic.com/images/icons/material/apps/weather/2x/isolated_scattered_tstorms_day_dark_color_96dp.png",
                "11n": "http://www.gstatic.com/images/icons/material/apps/weather/2x/isolated_scattered_tstorms_night_dark_color_96dp.png",
                "13d": "http://www.gstatic.com/images/icons/material/apps/weather/2x/snow_showers_snow_dark_color_96dp.png",
                "13n": "http://www.gstatic.com/images/icons/material/apps/weather/2x/snow_showers_snow_dark_color_96dp.png",
                "50d": "http://www.gstatic.com/images/icons/material/apps/weather/2x/haze_fog_dust_smoke_dark_color_96dp.png",
                "50n": "http://www.gstatic.com/images/icons/material/apps/weather/2x/haze_fog_dust_smoke_dark_color_96dp.png"
            }

            const getimg = document.getElementById("weather_img")
            const weather = document.getElementById("weather");
            if (!yourLocation || !weatherapi) return weather.innerHTML = Number.parseFloat(0) + "°C"
            fetch(`https://api.openweathermap.org/data/2.5/weather?q=${encodeURI(yourLocation)}&appid=${weatherapi}&units=metric`)
                .then(response => response.json())
                .then(data => {
                    weather.innerHTML = Number.parseFloat(data?.main?.temp || 0).toFixed(0) + "°C" //data.weather[0].icon
                    getimg.src = images[data?.weather[0]?.icon || "01d"]
                })
        }
        weather(yourLocation, weatherapi);

        function firstUpperCase(str) {
            return str.charAt(0).toUpperCase() + str.slice(1);
        }