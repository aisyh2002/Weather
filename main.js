// console.log("testing");

var loc = "Ipoh";
// define elements
var locationEle = document.getElementById('location');
var iconEle = document.getElementById('icon');
var weatherEle = document.getElementById('weather');
var tempEle = document.getElementById('temp');
var humidityEle = document.getElementById("humidity");


// template string ` beside number 1 key



fetch(`https://api.openweathermap.org/data/2.5/weather?q=${loc}&appid=fc97c5a0c0302cc7c945bc04b4eeed5a`)
.then(response => response.json())
.then( data=>{
    console.log("Data...", data);
    console.log("Data main...", data.main);
    console.log("Temp", data.main.temp);

    var tempData = data.main.temp - 273.15;
    console.log("Cel:", tempData);
});

function getWeather(locPara) {
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${locPara}&appid=fc97c5a0c0302cc7c945bc04b4eeed5a`)

    .then((response) => response.json())
    .then((data) =>{
        var name = data.name;
        var weather = data.weather[0].main;
        var icon = data.weather[0].icon;
        var temp = data.main.temp - 273.15;
        var humidity = data.main.humidity;

        locationEle.innerHTML = name;
        weatherEle.innerHTML = weather;
        iconEle.src = `icons/${icon}.png`;
        // iconEle.src = `http://openweathermap.org/img/wn/${icon}@2x.png`;
        // tempEle.innerHTML = temp.toFixed
        // tempEle.innerHTML = Math.floor(temp);
        tempEle.innerHTML = Math.ceil(temp);
        humidityEle.innerHTML = humidity;
    } ); 
}