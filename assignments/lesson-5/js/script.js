//get the window width and heght
//my simple code
function getWindowSize() {
    var w = window.innerWidth;
    //var h = window.innerHeight;
    //alert(w + " " + h);
    document.getElementById("winSize").innerHTML = "Width: " + w ;
  }

// code from : https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers/onresize
//  const heightOutput = document.querySelector('#height');
//const widthOutput = document.querySelector('#width');

/*function resize() {
 // heightOutput.textContent = window.innerHeight;
  widthOutput.textContent = window.innerWidth;
}*/

//window.onresize = resize;
window.onresize = getWindowSize;