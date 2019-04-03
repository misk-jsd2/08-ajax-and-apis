/*

- Refactor the codealong to work with user interaction. In the index.html file
there is a "Get Consumer Finance Data" button. When the user clicks the button,
pull data from the provided link above (http://data.consumerfinance.gov/api/views.json).
Handle the link success and error responses accordingly, displaying results in
console.log() if successful.

- Separate your logic so that you can use your functions for another user button
click of "Get Custom Data". Interact with an API of your choice and handle both
success and error scenarios.
*/



  // Alternate data source: https://data.cityofnewyork.us/api/views/jb7j-dtam/rows.json?accessType=DOWNLOAD

'use strict';
(function() {

 // Create instance of XMLHTTPRequest
 var httpRequest = new XMLHttpRequest();
//


 // Set a custom function to handle the request
 httpRequest.onreadystatechange = responseMethod;

 function responseMethod() {//decler 
   // Request logic
 

 // Alternative method:
 // httpRequest.onreadystatechange = function() {
 //   
 // }
 
   // Check if our state is "DONE"
  if (httpRequest.readyState === XMLHttpRequest.DONE) {
    // If our request was successful we get a return code/status of 200
    if (httpRequest.status === 200) { //200 it is mean ok
      // This is where we update our UI accordingly. Our data is available to us through the responseText parameter
      console.log(httpRequest.responseText);
    } else {
      // This is the scenario that there was an error with our request
      console.log('There was a problem with the request.');
    }
  }
}
 
//  httpRequest.open('GET', 'http://data.consumerfinance.gov/api/views.json');

// httpRequest.send();

var $button = $('#getCustomDataButton');//
  $button.on('click', function(event) {//
    event.preventDefault();//
  httpRequest.open('GET', 'https://data.cityofnewyork.us/api/views/jb7j-dtam/rows.json?accessType=DOWNLOAD');
  httpRequest.send();
})})();

document.getElementById('getCustomDataButton').addEventListener("click", request);//add



