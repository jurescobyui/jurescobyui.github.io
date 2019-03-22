var cityName=document.getElementById('cityName').innerHTML;
var divFlex = document.querySelector('div.events');
var requestURL="https://byui-cit230.github.io/weather/data/towndata.json";
var request = new XMLHttpRequest();
    request.open('GET', requestURL);
    request.responseType = 'json';
    request.send();

    request.onload = function() {
        var townData = request.response;
       for(var i=0; i < townData.towns.length; i++){
         if(townData.towns[i].name===cityName){
                var myH3 = document.createElement('h3');//declare new h3
                myH3.innerText="Events";// townData.towns[i].name; // assign a text in the h3 element
                divFlex.appendChild(myH3);// add the element to the dom

                var myP1=document.createElement('p');// declare a new p element
               
              
               var myUL=document.createElement('ul');
               
                
               for(var j=0;j<townData.towns[i].events.length; j++){
                var myLi=document.createElement('li');
                  myLi.innerHTML = townData.towns[i].events[j];
                  myUL.appendChild(myLi);

               }
               myP1.appendChild(myUL);
               divFlex.appendChild(myP1);
              
               
                
                console.log(i + " " + townData.towns[i].name);
        
            }// end of if
         }
     
      }// end of function