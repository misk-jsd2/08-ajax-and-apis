/*

- Sign up for openweathermap.org and generate an API key.
- User either $.ajax or $.get to pull weather current data .
  for Washington DC (hint: http://api.openweathermap.org/data/2.5/weather?q=...).
- Print the temperature in console.
- Bonus 1: add a form prompting user for the city and state.
- Bonus 2: convert answer from kelvin to fahrenheit.

*/

'use strict';
(function() {

 $('#submit').click(function(event) {request(event)});

})();


function request(event) {
    event.preventDefault();
    var weatherUrl = "http://api.openweathermap.org/data/2.5/weather";
    var appid = "df55976570ae8c7783615056e1f0e0b3";
    var userInput = $('#cityInput').val();
    $.ajax({
      url: weatherUrl,
      type : 'GET',
      data: {
        q:userInput,
        appid: appid
      },

    success: function( response ) {
      console.log(response);
      var $city = $('h1');
      var $temp = $('h2');
      var $hum = $('h3');
      var $tempToC = response.main.temp - 273.15; // from K to C.
      $city.text(response.name);
      $temp.text('Temperature: '+ $tempToC.toFixed(2)+' C');
      $hum.text('Humidity: '+response.main.humidity+'%');
    }
  });
}
