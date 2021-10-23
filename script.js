let city = undefined;
let temp = undefined;
let description = undefined;
let humidity = undefined;
let wind = undefined;

async function get_weather(city) {
    let response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=cb57b2b04939212bf827c2e4faf804ee`);
    let data = await response.json();
    return data;
}

function init_weather(city='Bangalore') {
    
    /* Older way of using `fetch` API */
    // fetch("https://api.openweathermap.org/data/2.5/weather?q=Denver&units=metric&appid=cb57b2b04939212bf827c2e4faf804ee")
    // .then(response => response.json())
    // .then(data => console.log(data));
    
    /* [NEW] Using Async function to fetch the init weather data */
    get_weather(city).then(data => {
        console.log(data);
        city = data.name;
        humidity = data.main.humidity;
        wind = data.wind.speed;
        temp = data.main.temp;
        description = data.weather[0].main;
        console.log(`city-${city}, temp-${temp}, description-${description}, humidity-${humidity}, wind-${wind}`);
        document.getElementById("city_id").innerText = `Weather in ${city}`;
        document.getElementById("temp_id").innerText = `${temp}°C`;
        document.getElementById("description_id").innerText = `Description : ${description}`;
        document.getElementById("humidity_id").innerText = `Humidity : ${humidity}%`;
        document.getElementById("wind_id").innerText = `Wind Speed : ${wind} km/h`;
    });
}

function search_weather() {
    console.log('loaded');
    let city = document.getElementById("search-bar_id").value;
    console.log(city);
    init_weather(city);
}