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

'use strict';
(function() {


	var httpRequest = new XMLHttpRequest();
	
	httpRequest.onreadystatechange = responseMethod;

	function responseMethod() {
		if (httpRequest.readyState === XMLHttpRequest.DONE) {
      // If our request was successful we get a return code/status of 200
      		if (httpRequest.status === 200) {
        // This is where we update our UI accordingly. Our data is available to us through the responseText parameter
        		console.log(httpRequest.responseText);
      		} 
      		else {
        // This is the scenario that there was an error with our request
        		console.log('There was a problem with the request.');
      		}
   		 }

	}

	var button = document.getElementById('getCustomDataButton');
    button.onclick = function(event) {
     	event.preventDefault();
		httpRequest.open('GET', 'https://data.cityofnewyork.us/api/views/jb7j-dtam/rows.json?accessType=DOWNLOAD');
		httpRequest.send();
	}
	
	var button2 = document.getElementById('getDataButton');
	button2.onclick = function(event) {
     	event.preventDefault();
		httpRequest.open('GET', 'http://data.consumerfinance.gov/api/views.json');
		httpRequest.send();
	}

  // Alternate data source: https://data.cityofnewyork.us/api/views/jb7j-dtam/rows.json?accessType=DOWNLOAD
})();
