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
//  var apiKey = "";

window.onload = function() {
  // when someone clicks the button...
document.getElementById("new-thing-button").onclick = function(event) {
 event.preventDefault();
    var userinput = document.getElementById("new-thing").value;
 	$('#CityName').text(userinput);
 // console.log(userinput);
  

//	var userinput= 'London';
	var appid = '86ace002e6f4cd05c3077fc040e6fd06'

	$.ajax({
	url: weatherUrl,
	type: 'GET',
	data: {
		q: userinput,
		appid: appid
	},
		success: function(response){

		console.log(response);
		setWeather(response);

	}



})
    function setWeather(Weatherd1){
    $('#Temp').text(Weatherd1.main.temp);
    $('#humidity').text(Weatherd1.main.humidity);
    $('#pressure').text(Weatherd1.main.pressure);
    $('#WindS').text(Weatherd1.wind.speed);

}
   
}}})();
// var userinput= 'r2';

// var StarWarsURL = 'https://swapi.co/api/people/';
// 	 $.ajax({
// 	 	url:StarWarsURL,

// 	 	data: {
// 	 		search: userinput
// 	 	}
// //$.get('https://data.cityofnewyork.us/api/views/jb7j-dtam/rows.json?accessType=DOWNLOAD', function(response){
// //	console.log(response.data);



// }, function(response);


//   })();