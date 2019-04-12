var templeName = document.getElementById('templeName').innerHTML;
var lon;
var lat;

switch(templeName){
    case "San Diego California Temple":
    
        lon=-117.2742;
        lat= 32.847271;
        break;
    case "Laei Hawaii":
        lon=-111.253532;
        lat=42.051601 ;
        break;
    case "Soda Springs":
        lon=-108.272346;
        lat=45.56551;
        break;
}

//get temple data from json file
let templeRequest = new XMLHttpRequest();
let xhrURLString = "https://jurescobyui.github.io/assignments/templeinnandsuites/js/temples.json";
templeRequest.open("GET", xhrURLString,true);
//templeData.responseType='json';
templeRequest.send();
templeRequest.onload=function(){
let templeData = JSON.parse(templeRequest.responseText);

console.log(templeData);
console.log(templeData.length);
var txtServices=" ";
for(i=0;i<templeData.length;i++){
    console.log(templeData[i].name);
    if(templeData[i].name===templeName){
        document.getElementById('templeImage').src=templeData[i].image;
        document.getElementById('templeAddress').innerHTML=templeData[i].address;
        document.getElementById('tel').innerHTML=templeData[i].tel;
        for(j=0;j<templeData[i].services.length;j++){
           // txtServices += templeData[i].services[j] +"\n";
           console.log(templeData[i].services[j]);
        }
       // document.getElementById('templeServices').innerHTML=txtServices;
       
        console.log(templeData[i].address);
        console.log(templeData[i].tel);
        console.log(templeData[i].services);
        console.log(templeData[i].closures);
        console.log(templeData[i].milestones);
        
    }
}


}//end templeData onload funcion

// pull out weather for the temple location
let weatherRequest = new XMLHttpRequest();
var apiURLstring = "https://api.openweathermap.org/data/2.5/weather?lon="+lon+"&lat="+lat+"&units=imperial&APPID=8ec39d712acbcc119f2f75333221c559";

//working api for openweather
weatherRequest.open("GET",apiURLstring,true);
//weatherRequest.responseType = 'json';
weatherRequest.send();

weatherRequest.onload = function() {
    //assign response to var weatherData

let weatherData = JSON.parse(weatherRequest.responseText);
console.log(weatherData);
    //get current temp from json array assign to var curTemp
var curTemp = weatherData.main.temp_max;
var description = weatherData.weather[0].description;
var windChill = weatherData.wind.deg;
var humidity = weatherData.main.humidity;
var windSpeed = weatherData.wind.speed;
var iconcode=weatherData.weather[0].icon;
var iconurl = "http://openweathermap.org/img/w/" + iconcode + ".png";
    //output the current temp in the html
   document.getElementById('wicon').src=iconurl;
   document.getElementById('current-temp').innerHTML=curTemp;
   document.getElementById('description').innerHTML=description;
   document.getElementById('currentConditions').innerHTML=description;
   document.getElementById('windChillOutput').innerHTML=windChill;
   document.getElementById('humidity').innerHTML=humidity;
   document.getElementById('windSpeed').innerHTML=windSpeed;
}