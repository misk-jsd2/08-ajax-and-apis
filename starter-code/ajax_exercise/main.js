
var button = document.getElementById('weatherButton');
button.onclick = (function(GetTemp) {
    var usrInput = document.getElementById('weatherText').value;

		'use strict';
		(function() {
			var weatherUrl = "http://api.openweathermap.org/data/2.5/weather?q=";
			var apiKey = "4144587869c5311f463fce316e263bc0";
			var unit = 'metric';
      var lang = 'ar';
		
			getWeather(usrInput);
		
			$('#GetTemp').on('click', function(event) {
				getWeather($('#usrInput').val());
			});
		
			function getWeather(usrInput) {
				$.ajax({
						url: weatherUrl + usrInput + ',' + '&appid=' + apiKey,
		
						// Work with the response
						success: function( response ) {
								updateUISuccess(response.main.temp, usrInput);
						},
		
						error: function() {
							updateUIError();
						}
				});
			}
		
			function updateUISuccess(temp, usrInput) {
				$('#usrInput').val('');
				$('#location').html(usrInput);
				console.log(temp);
				$('#temp').html(temp);
			}
		
			function updateUIError() {
				alert("There was an error getting weather data :(");
			}
		
		})();
		