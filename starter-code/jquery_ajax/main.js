/*

- Sign up for openweathermap.org and generate an API key.
- User either $.ajax or $.get to pull weather current data .
  for Washington DC (hint: http://api.openweathermap.org/data/2.5/weather?q=...).
- Print the temperature in console.
- Bonus 1: add a form prompting user for the city and state.
- Bonus 2: convert answer from kelvin to fahrenheit.

*/

// 'use strict'; 
(function() {
  // take the user input to be desplyed on screen. H/W
  var weatherUrl = "http://api.openweathermap.org/data/2.5/weather";
  var apiKey = "";
  
  var appId = '43daa34bfbf43a4d05f3d2b170269cd1'
  
  var userInput = document.getElementById('user');
   
  
  var click1 = document.getElementById('submit');
  click1.onclick = function(event){
    event.preventDefault();
    var userText = userInput.value;
  $.ajax({
    url: weatherUrl,
    type: 'GET',
    data:{
      q: userText,
      appid: appId
    },
    success: function(response){
      var humidity = (response.main.humidity);
        
        var creatP = document.createElement('P');
        document.body.appendChild(creatP);
        creatP.innerHTML = (`the humidity in ${userText} is ${humidity}`);
        
        
        
      }
    })
  
  }
    
    
  
})();
  

// var userInput = 'r2'

// var starrWarsUrl = 'https://swapi.co/api/people/?search=r2'

// $.ajax({
//  url:starrWarsUrl,
//  data :{
//    search: userInput
//  }

// })

//   // $.get('https://data.cityofnewyork.us/api/views/jb7j-dtam/rows.json?accessType=DOWNLOAD', function(response){
//   //   console.log(response.data)
//   // })
