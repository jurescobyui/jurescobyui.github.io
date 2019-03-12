let weatherRequest = new XMLHttpRequest();
var apiURLstring = "https://api.openweathermap.org/data/2.5/weather?id=5604473&units=imperial&APPID=8ec39d712acbcc119f2f75333221c559";

//working api for openweather
weatherRequest.open("GET",apiURLstring,true);
//weatherRequest.responseType = 'json';
weatherRequest.send();

weatherRequest.onload = function() {
    //assign response to var weatherData

let weatherData = JSON.parse(weatherRequest.responseText);
console.log(weatherData);
    //get current temp from json array assign to var curTemp
var curTemp = weatherData.main.temp;
var description = weatherData.weather[0].description;
var windChill = weatherData.wind.deg;
var humidity = weatherData.main.humidity;
var windSpeed = weatherData.wind.speed;
    //output the current temp in the html
   document.getElementById('current-temp').innerHTML=curTemp;
   document.getElementById('description').innerHTML=description;
   document.getElementById('windChillOutput').innerHTML=windChill;
   document.getElementById('humidity').innerHTML=humidity;
   document.getElementById('windSpeed').innerHTML=windSpeed;
}

let forecastRequest = new XMLHttpRequest();
var xhrURL = "http://api.openweathermap.org/data/2.5/forecast?id=5604473&units=imperial&APPID=8ec39d712acbcc119f2f75333221c559";
//http://api.openweathermap.org/data/2.5/forecast?id=5604473&units=imperial&APPID=8ec39d712acbcc119f2f75333221c559

//working api for openweather
forecastRequest.open("GET",xhrURL,true);
//orecastReques.responseType = 'json';
forecastRequest.send();


forecastRequest.onload = function() {
    let forecastData = JSON.parse(forecastRequest.responseText);
 console.log(forecastData);
var nDays = forecastData.list.length;
var strDate = forecastData.list[0].dt_txt;
var tempMax= forecastData.list[0].main.temp_max;
var tempMin = forecastData.list[0].main.temp_min;
var iconcode=forecastData.list[0].weather[0].icon;
var iconurl = "http://openweathermap.org/img/w/" + iconcode + ".png";
var wdescription=forecastData.list[0].weather[0].description;

document.getElementById('forecastData').innerHTML=nDays;
document.getElementById('date').innerHTML=strDate;
document.getElementById('iconName').innerHTML=iconcode;
document.getElementById('wicon').src=iconurl;
document.getElementById('tempMax').innerHTML=tempMax;
document.getElementById('tempMin').innerHTML=tempMin;
document.getElementById('wdescription').innerHTML=wdescription;

}