function adjustRating(rating) {
    document.getElementById("ratingvalue").innerHTML = rating;
}

function disableSelect(){
   // alert("disable select");
    var x = document.getElementById("storm_region").options[0].disabled=true;
}