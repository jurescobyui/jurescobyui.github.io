function reqListener () {
    console.log(this.responseText);
  }
let weatherRequest = new XMLHttpRequest();
weatherRequest.addEventListener("load", reqListener);
//working api for openweather
//weatherRequest.open("GET", "http://api.openweathermap.org/data/2.5/weather?id=5604473&APPID=8ec39d712acbcc119f2f75333221c559");
// test api on techdb.win preston json
weatherRequest.open("GET", "http://techdb.win/files/byui/cit230/preston.json");
//weatherRequest.responseType = 'json';
weatherRequest.send();
/*
weatherRequest.onload = function() {
    //var townData = request.response;
    console.log(weatherRequest.responseXML);
}*/
//my api key: APPID=8ec39d712acbcc119f2f75333221c559
//http://api.openweathermap.org/data/2.5/weather?id=5604473&APPID=8ec39d712acbcc119f2f75333221c559
//sample api.openweathermap.org/data/2.5/weather?id=2172797