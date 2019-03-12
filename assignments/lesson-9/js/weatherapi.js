let weatherRequest = new XMLHttpRequest();
var apiURLstring = "https://api.openweathermap.org/data/2.5/weather?id=5604473&APPID=8ec39d712acbcc119f2f75333221c559";
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
    //output the current temp in the html
   document.getElementById('current-temp').innerHTML=curTemp;
}
