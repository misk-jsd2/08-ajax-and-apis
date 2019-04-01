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
  var apiKey = "";

  var appid = "4452be3c247c2a34b8f52b1211951825";
  var userinput = document.getElementById('search');
  var botton = document.getElementById('search-button')

botton.onclick = function(event) {
     event.preventDefault();
$.ajax({
     url:weatherUrl,
	 type: "GET",
  data:{
    q: userinput.value,
    appid: appid
  },
  success: function(response){
    console.log(response.main);
     
     var kelvinn = response.main.temp  - 273;

     var vehrnhite =  Math.floor(kelvinn * (9/5) + 32)

    var newThingLi = document.createElement('p');
    var newThingText =  document.createTextNode( 'The temperature today in '+ userinput.value +' is '+vehrnhite +' '+'Fahrenheit and the humidity is '+ response.main.humidity) ;
    newThingLi.appendChild(newThingText);
    document.body.appendChild(newThingLi);
    
  },
  error: function(e){
  	console.log(e);
  }
})

}
})();
