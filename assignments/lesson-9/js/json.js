var section = document.querySelector('section');
var divFlex = document.querySelector('div.flex-container');
var requestURL="https://byui-cit230.github.io/weather/data/towndata.json";
var request = new XMLHttpRequest();
    request.open('GET', requestURL);
    request.responseType = 'json';
    request.send();

    request.onload = function() {
        var townData = request.response;
       for(var i=0; i < townData.towns.length; i++){
         if(townData.towns[i].name==="Franklin" || townData.towns[i].name==="Greenville" || townData.towns[i].name ==="Springfield"){
                //create a div
                var newFlex=document.createElement('div'); // declare a new div 
                newFlex.className="card"; // assign a class name card
                divFlex.appendChild(newFlex);   // create the div

                var myH3 = document.createElement('h3');//declare new h3
                myH3.innerText=townData.towns[i].name; // assign a text in the h3 element
                newFlex.appendChild(myH3);// add the element to the dom

                var myP1=document.createElement('p');// declare a new p element
                myP1.innerHTML="<strong>" + townData.towns[i].motto+"</strong>";
                newFlex.appendChild(myP1);// create the new p

                var myP2=document.createElement('p');// declare a new p element
                myP2.innerHTML="<strong>Year Founded: </strong>" + townData.towns[i].yearFounded;
                myP2.innerHTML+="<br><strong>Population: </strong>" + townData.towns[i].currentPopulation;
                myP2.innerHTML+="<br><strong>Annual Rain Fall: </strong>" + townData.towns[i].averageRainfall;
                newFlex.appendChild(myP2);// create the new p

                /** add image */
                var myImg =document.createElement('img');
                myImg.src="images/gallery/thumbnails/"+i+".jpg";
                myImg.alt="Image of " + townData.towns[i].name;
                newFlex.appendChild(myImg);

                console.log(i + " " + townData.towns[i].name);
        // createCard(townData);
            }// end of if
         }
      //createCard(townData, i);
       // showTownData(townData);
      }// end of function
    
  

    