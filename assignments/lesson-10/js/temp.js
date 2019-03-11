function createCard(jsonObj){
    //use for loop and filter desired town Franklin, Greenville, and Springfield
   /* for(var i=0;i < jsonObj.towns.length; i++){
        alert(jsonObj.towns[i].name);
    }*/
    for(var i=0; i < jsonObj.towns.length; i++){
         /* get the data and assign to variables */
         var townName=jsonObj.towns[i].name;
         var townMotto = jsonObj.towns[i].motto;
         var townFounded = jsonObj.towns[i].yearFounded;
         var townPopulation = jsonObj.towns[i].currentPopulation;
         var aveRainfall = jsonObj.towns[i].averageRainfall;
         
         /*************************************************************** */
         /** create html elements */
         var newFlex=document.createElement('div'); // declare a new div 
         newFlex.className="card"; // assign a class name card
         divFlex.appendChild(newFlex);   // create the div
         /*create title */
         var myH3 = document.createElement('h3');//declare new h3
         myH3.innerText=townName; // assign a text in the h3 element
         newFlex.appendChild(myH3);// add the element to the dom
         /** create the paragraph */
         var myP1=document.createElement('p');// declare a new p element
         myP1.innerHTML="Hello this is a paragraph text";
         newFlex.appendChild(myP1);// create the new p
         /*
         var myP1=document.createElement('p');// declare a new p element
         myP1.innerHTML="Hello this is another paragraph text";
         newFlex.appendChild(myP1);// create the new p
         */
         /** add image */
         var myImg =document.createElement('img');
         myImg.src="images/gallery/thumbnails/city.jpg";
         myImg.alt="Image of Beach front";
         newFlex.appendChild(myImg);
         /******************************************************* */

    }//end for loop

           
   

   
    

}