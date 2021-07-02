var d = new Date();
var dayName=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
var dayNum;
var monthName=["January","February","March","April","May","June","July","August","September","October","November","December"];
var year;
var dateString=dayName[d.getDay()] + ", " + d.getDate() + " " + monthName[d.getMonth()] + " "+ d.getFullYear();
document.getElementById("currentDate").innerHTML = dateString;
