
function myFunction() {
    var x = document.getElementById("mytopnav");
    if (x.className === "topnav") {
    x.className += " responsive";
    } else {
    x.className = "topnav";
    }
}

function hideme(){
    var y = document.getElementById("drpdown-content");
    if(y.className==="dropdown-content"){
        y.className +=" hidden"
    }else{
        y.className="dropdown-content";
    }
}

function gotoLink(){
    alert("go to another link!");
    location.replace("https://jurescobyui.github.io");
}

        