/* windchill */
//formula   f=34.74 + 0.6215 (t) - 35.75(Math.Pow(s,0.16))+ 0.4275(t)(Math.pow(s,0.16))
var t = document.getElementById("tempBase").innerHTML;
//alert(t);
var s = document.getElementById("windSpeed").innerHTML;
//alert(s);
f=34.74 + (0.6215 * t) - (35.75 * Math.pow(s,0.16)) + (0.4275 * t * Math.pow(s,0.16));
//alert(f.toFixed(2));
document.getElementById("windChillOutput").innerHTML=f.toFixed(1);