/*

- Sign up for openweathermap.org and generate an API key.
- User either $.ajax or $.get to pull weather current data .
  for Washington DC (hint: http://api.openweathermap.org/data/2.5/weather?q=...).
- Print the temperature in console.
- Bonus 1: add a form prompting user for the city and state.
- Bonus 2: convert answer from kelvin to fahrenheit.

*/

'use strict';

$(document).ready(function(){
    $('#city-button').on('click', function(event){
        event.preventDefault();
        var getInfo = $('#city').val();
        getWeatherInfo(getInfo);

    });
});

function getWeatherInfo(weatherCity) {
  var weatherUrl = "https://api.openweathermap.org/data/2.5/weather/";
  var appid = "e3ea0a6cf870bb12e8e9ab73bdebcf33";
  $.ajax({
    url: weatherUrl,
    type: 'GET',
    data: {
      q: weatherCity,
      appid: appid
    },
    success: function(reaponse){
         setName(reaponse);
    } 
  });
};

function setName(weatherInfo){
    $('#info1').text(weatherInfo.main.temp);
    $('#info2').text(weatherInfo.main.pressure);
    $('#info3').text(weatherInfo.wind.speed);
    console.log(weatherInfo);
};