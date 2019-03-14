var divFlex = document.querySelector('div.events');
var requestURL="https://byui-cit230.github.io/weather/data/towndata.json";
var request = new XMLHttpRequest();
    request.open('GET', requestURL);
    request.responseType = 'json';
    request.send();

    request.onload = function() {
        var townData = request.response;
       for(var i=0; i < townData.towns.length; i++){
         if(townData.towns[i].name==="Preston"){
                var myH3 = document.createElement('h3');//declare new h3
                myH3.innerText="Events";// townData.towns[i].name; // assign a text in the h3 element
                divFlex.appendChild(myH3);// add the element to the dom

                var myP1=document.createElement('p');// declare a new p element
               
               // myP1.innerHTML=townData.towns[i].events[0];
               var myUL=document.createElement('ul');
               
                
               for(var j=0;j<townData.towns[i].events.length; j++){
                var myLi=document.createElement('li');
                  myLi.innerHTML = townData.towns[i].events[j];
                  myUL.appendChild(myLi);

               }
               myP1.appendChild(myUL);
               divFlex.appendChild(myP1);
              
               // divFlex.appendChild(myP1);// create the new p

                /*var myP2=document.createElement('p');// declare a new p element
                myP2.innerHTML="<strong>Year Founded: </strong>" + townData.towns[i].yearFounded;
                myP2.innerHTML+="<br><strong>Population: </strong>" + townData.towns[i].currentPopulation;
                myP2.innerHTML+="<br><strong>Annual Rain Fall: </strong>" + townData.towns[i].averageRainfall;

                divFlex.appendChild(myP2);// create the new p*/

                
                console.log(i + " " + townData.towns[i].name);
        
            }// end of if
         }
     
      }// end of function