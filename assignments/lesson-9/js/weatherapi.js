
let weatherRequest = new XMLHttpRequest();
weatherRequest.responseType = 'json';
//weatherRequest.addEventListener("load", reqListener);
weatherRequest.open("GET", "api.openweathermap.org/data/2.5/weather?id=5604473&APPID=8ec39d712acbcc119f2f75333221c559");
weatherRequest.send();

request.onload = function() {
    console.log(weatherRequest.responseText);
}
//my api key: APPID=8ec39d712acbcc119f2f75333221c559
//http://api.openweathermap.org/data/2.5/weather?id=5604473&APPID=8ec39d712acbcc119f2f75333221c559
//sample api.openweathermap.org/data/2.5/weather?id=2172797