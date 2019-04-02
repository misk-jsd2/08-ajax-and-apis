console.log("it work");

//......version1
// 'use strict';

// (function() {
//   var weatherUrl = "http://api.openweathermap.org/data/2.5/weather";
//   var userInput = $('#city');
//   var appid = 'b2fc3ff73ef87cee9c99ad9945fd7f80';
//   var button = $('#city-button');
  
//   $button.on('click', function(event)
//   {
//   	event.preventDefault();
//   	if(userInput="")
//   	{
//   		console.log("you did not input a city.")
//   	}
//   	else
//   	{
//   		$.ajax({
//   			url: weatherUrl,
//   			type: 'GET',
//   			data: {
//   				q: userInput,
//   				appid: appid,
//   			},
//   		}


//   	}
//   $.ajax({
//   	url: weatherUrl,
//   	type: 'GET',
//   	data: {
//   		q: userInput,
//   		appid
//   	},
//   	success: function(response)
//   	{
//   		console.log(response);
//   	},
//   	error: AjaxFailed
//   })
//   });
// function AjaxFailed(result) {
//       alert("FAILED : " + result.status + ' ' + result.statusText);
//     }


//......version2

'use strict';

// (function() {
//   var button = $('#city-button');
  
  $button.on('click', function(event)
  {
  	event.preventDefault();
  	var userInput = $('#city').val();
  	getCityWeather(userInput);
  }
  (function getCityWeather(UI)
  {
  	var weatherUrl = "http://api.openweathermap.org/data/2.5/weather";  	
  	var appid = 'b2fc3ff73ef87cee9c99ad9945fd7f80';//how we can take it as an input
  	if(UI="")
  	{
  		console.log("you did not input a city.")
  	}
  	else
  	{
  		$.ajax({
  			url: weatherUrl,
  			type: 'GET',
  			data: {
  				q: UI,
  				appid: appid,
  			},
  });
  }
});