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
    var appId = '43daa34bfbf43a4d05f3d2b170269cd1';
    var units = 'metric';


    
    $('#submit').on('click', function(){
    $.ajax({
  url: weatherUrl,
  type: 'GET',
  data:{
    q: $('#city').val(),
    appid: appId,
    units: units
  },
  success: function(response){
    console.log(response.main.temp);
      $('h1').after('<h4>'+response.main.temp+'°C</h4>');
  },
  error: function(){
    alert('error loading weather');
  }
})
})
})();
