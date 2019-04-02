
var button = document.getElementById('new-weather-button');
button.onclick = function(event) {
	event.preventDefault();
    var userInput = document.getElementById("new-weather").value;

	'use strict';
	(function() {
  		var weatherUrl = "http://api.openweathermap.org/data/2.5/weather";
  		var appid = "4144587869c5311f463fce316e263bc0";
  		var units = 'metric';

  		$.ajax({
  			url: weatherUrl,
  			type: 'GET',
  			data: {
	  			q: userInput,
  				appid: appid,
  				units: units
  			},
  			success: function( response ) {
	    		console.log( response ); // server response
  			}
  		})
  		.done(function(response) {
  			var temp = response.main.temp;
  			var wind = response.wind.speed;
  			var humidity = response.main.humidity
  			var x = $('<p>').text("Temperature: " + temp + "°C, ")
  			var y = $('<p>').text("Wind Speed: " + wind + ", ")
  			var z = $('<p>').text("Humidity: " + humidity)
  			$('#monitor_data').append(x);
  			$('#monitor_data').append(y);
  			$('#monitor_data').append(z);
		});
	})();
}