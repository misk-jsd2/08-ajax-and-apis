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
  var weatherUrl = "http://api.openweathermap.org/data/2.5/weather";
  var appid = "4144587869c5311f463fce316e263bc0";
  var userInput= '$user';
  var untis= 'metric';
  var lang='ar';
  var city = document.getElementById(userInput).value;

$.ajax({

url: weatherUrl,
type: 'GET',
data: {
  appid: appid,
  q: userInput,
  untis: untis,
  lang: lang,
},
success: function(response) {
  console.log( response );

}
});
});


