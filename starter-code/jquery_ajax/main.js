/*

- Sign up for openweathermap.org and generate an API key.
- User either $.ajax or $.get to pull weather current data .
  for Washington DC (hint: http://api.openweathermap.org/data/2.5/weather?q=...).
- Print the temperature in console.
- Bonus 1: add a form prompting user for the city and state.
- Bonus 2: convert answer from kelvin to fahrenheit.

*/

'use strict';

  var weatherUrl = "http://api.openweathermap.org/data/2.5/weather";
  
  var userInput = 'London'

  var appid = '6109409e839651115739cc159c3d027a'

  $('#citybutton').click(function(event){
    event.preventDefault();

    var userInput = $('#city').val()
    console.log(userInput)

  


    
  $.ajax ({
    url : weatherUrl ,
    type : 'GET',
    data :  {
      q: userInput,
      appid: appid

    },

    success: function(response) {
      console.log(response)
   
      $('#display').append('h1').text(JSON.stringify(response.main))


    }


  })










  })





