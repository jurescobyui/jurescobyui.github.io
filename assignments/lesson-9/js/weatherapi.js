function reqListener () {
    console.log(this.responseText);
  }
let weatherRequest = new XMLHttpRequest();

weatherRequest.addEventListener("load", reqListener);
weatherRequest.open("GET", "api.openweathermap.org/data/2.5/weather?id=5604473&APPID=8ec39d712acbcc119f2f75333221c559");
weatherRequest.send();
//my api key: APPID=8ec39d712acbcc119f2f75333221c559

//sample api.openweathermap.org/data/2.5/weather?id=2172797