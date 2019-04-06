
'use strict';
(function() {
  var HttpRequest = new XMLHttpRequest();

   HttpRequest.onreadystatechange = response;
   function response(){
	}}();

'use strict';
(function getweather () {
  var weatherUrl = "http://api.openweathermap.org/data/2.5/weather?q=";
  var apiKey = "";
	   if (HttpRequest.readyState === XMLHttpRequest.DONE) {
	     if (HttpRequest.status === 200) {
	       console.log(HttpRequest.response);
	     } else {
	       console.log('request error');
	     }

	  }
    document.getElementById('city').addEventListener("click", request);
	  HttpRequest.open('GET', ' http://api.openweathermap.org/data/2.5/weather');
	  HttpRequest.send();

	}) ();
