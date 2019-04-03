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
  var appid = 'b2fc3ff73ef87cee9c99ad9945fd7f80';
  
  var $userinput = $('#user_input');
  var $button = $('#Button');
  $button.on('click', function(event) {
     event.preventDefault();
     var userInput = $userinput.val();
 

  $.ajax({
    url: weatherUrl,
    type: 'GET',
    data: {
      q : userInput,
      appid: appid,
    },
    success: function(response){
      console.log(response)


 
      var $cityname = response.name;
      var $CityName = $('#CityName');
      $CityName.text($cityname);
 
      var $temp = response.main.temp;
      var $Temp = $('#Temp');
       var $Tempc= ($temp - 273.15);      
      $Temp.text('Temperature : ' + $Tempc +'C');
 

     }

  })

  })
})();








//   'use strict';
// (function() {
//   var weatherUrl = "http://api.openweathermap.org/data/2.5/weather?";
//   var userInput = 'London';
//   var appid = 'b2fc3ff73ef87cee9c99ad9945fd7f80';


//   $.ajax({
//     url: weatherUrl,
//     type:'GET',
//     data: {
//       q : userInput,
//       appid : appid,
//     },
//     success: function (response) {
//       console.log(response);

//     }
//   })
// })();


//-------------------------------


  // var starWarsURL = 'https://swapi.co/api/people/?search=r2'
   
//   $.ajax({
//    url: starWarsURL,
//    type: 'GET',
//    data:{
//     search: userInput
//    // https://samples.openweathermap.org/data/2.5/weather?q=London,uk&appid=b6907d289e10d714a6e88b30761fae22

//   }, success: function(response){
//     console.log(response)
//   }

//   });


// $.get('https://data.cityofnewyork.us/api/views/jb7j-dtam/rows.json?accessType=DOWNLOAD', function(response){
//   console.log(response.data)
// })


// })();
