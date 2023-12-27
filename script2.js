const apiKey = "bef6a5c25399e49c430d62f89f5ea137";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox = document.querySelector(".search2 input");
const searchBtn = document.querySelector(".search2 button");
const weatherIcon = document.querySelector(".weather_icon");
async function checkweather(city){
const response = await fetch(apiUrl + city+ `&appid=${apiKey}`);
var data = await response.json();
console.log(data);
document.querySelector(".city").innerHTML = data.name;
document.querySelector(".temp").innerHTML = Math.round(data.main.temp)  + "°c";

if(data.weather[0].main == "Clouds")
{
  weatherIcon.src = "weather-app-img/images/clouds.png";
}
else if(data.weather[0].main == "Clear")
{
  weatherIcon.src = "weather-app-img/images/clear.png";
}
else if(data.weather[0].main == "Rain")
{
  weatherIcon.src = "weather-app-img/images/rain.png";
}
else if(data.weather[0].main == "Drizzle")
{
  weatherIcon.src = "weather-app-img/images/drizzle.png";
}
else if(data.weather[0].main == "Mist")
{
  weatherIcon.src = "weather-app-img/images/mist.png";
}
else if(data.weather[0].main == "Snow")
{
  weatherIcon.src = "weather-app-img/images/snow.png";
}
else if(data.weather[0].main == "Wind")
{
  weatherIcon.src = "weather-app-img/images/wind.png";
}
else if(data.weather[0].main == "Humidity")
{
  weatherIcon.src = "weather-app-img/images/humidity.png";
}

}

searchBtn.addEventListener("click", ()=>{
    if (searchBox.value.trim() === '') {
        alert('Please enter a city name!');
        return;
      }
    checkweather(searchBox.value);

})
