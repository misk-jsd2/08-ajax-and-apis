
var button = document.getElementById('weatherButton');
button.onclick = (function(event) {
	event.preventDefault();
    var userInput = document.getElementById('weatherText').value;


	'use strict';
	(function() {
  		var weatherUrl = 'http://api.openweathermap.org/data/2.5/weather';
  		var apiKey = '4144587869c5311f463fce316e263bc0';
      var unit = 'metric';
      var lang = 'ar';

  });
  		$.ajax({
  			url: weatherUrl,
  			type: 'GET',
  			data: {
	  			q: userInput,
  				appid: apiKey,
          units: unit,
          lang: lang,
  			},
  			success: function( response ) {
	    		console.log( response ); // server response
  			}
  		})
  		.done(function(response) {
  			var temp = response.main.temp;
  			var desc = response.wind.speed;
  			var humidity = response.main.humidity
  			var x = $('<p>').text("Temperature: " + temp + "°C, ")
  			var y = $('<p>').text("Wind Speed: " + wind + ", ")
  			var z = $('<p>').text("Humidity: " + humidity)
  			$('#Data').append(x);
  			$('#Data').append(y);
  			$('#Data').append(z);
    });
  });
