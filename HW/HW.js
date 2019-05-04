$(document).ready(function(){
 $('#btn').click(function(event){
    event.preventDefault();
var city = $("#city").val();
console.log('city is:'+city);





if (city != ''){
$.ajax({
    url: 'http://api.openweathermap.org/data/2.5/weather?q=' + city + "&units=metric" +
    "&APPID=f10455a4d92b4736cdd7404b7dc60cd9",
    type: "GET",
    dataType: "jsonp",

    success: function(respons){
    	// console.log(respons.main.temp);
        document.getElementById("weatherinformation").innerHTML = '';
         var color = document.createTextNode(respons.main.temp);
    
    document.getElementById('weatherinformation').appendChild(color);
        // $("#result").html(respons); 

 }
    });
}else{
	$("$error").html('field cannot be empty');

    }


  });

}); 



// window.onload = function() {

//   var button = document.getElementById('new-thing-button');
//   var newThingInput = document.getElementById('new-thing');

//   button.onclick = function(weatherUrl){
//   	 weatherUrl.preventDefault();

//     newThingInput.value = "newThing";

//     'use strict';

// function addToList(newThing) {
  
//   var newThingText = document.createTextNode(newThing);
  
// }

// var weatherUrl = "http://api.openweathermap.org/data/2.5/weather";
// var newThingInput = 'London';
// newThingInput.value = "";
// var appid = 'f10455a4d92b4736cdd7404b7dc60cd9';
// $.ajax({
// 	url: weatherUrl,
// 	type: "GET",
// 	data: {
// 		q: userInput,
// 		appid: appid
// 	addToList(newThing);
// 	},
// 	success: function(response){
// 		console.log(response);
	
// }

// function setName(colorObject){
//     document.getElementById("weatherinformation").innerHTML = '';
//     var color = document.createTextNode(colorObject.name.value);
    
//     document.getElementById('weatherinformation').appendChild(color);
// }

// })();



//    {
//     weatherUrl.preventDefault();
//     var weatherUrl = "http://api.openweathermap.org/data/2.5/weather";
//     var newThing = newThingInput.value;
//     addToList(newThing);


//     newThingInput.value = "";
//   };
// };

// (function() {

// var weatherUrl = "http://api.openweathermap.org/data/2.5/weather";
// var userInput = 'London';
// var appid = 'f10455a4d92b4736cdd7404b7dc60cd9';
// $.ajax({
// 	url: weatherUrl,
// 	type: "GET",
// 	data: {
// 		q: userInput,
// 		appid: appid
// 	},
// 	success: function(response){
// 		console.log(response);
// 	},
// 	error: function(e){
// 		console.log(e);
// 	}

// });
// })();