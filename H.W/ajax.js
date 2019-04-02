$(document).ready(function(){
    $('#weather').on('click', function(){
    	var userInput = $('#mycity').val();
    	var weatherUrl = "http://api.openweathermap.org/data/2.5/weather";
        getappidAPI(userInput,weatherUrl);
    });
});

function getappidAPI(userInput,weatherUrl){
	var appid = 'e7d5244d580ad3aa84ee681ad709d0d6';
	$.ajax({
   	url: weatherUrl,
   	type:'GET',
   	data: {
     	q : userInput,
     	appid : appid
   	},
   	success: function (response) {
    setData(response);
    console.log(response);
   }
 })
}

function setData(Data){
    $('#City').text(Data.name);
    $('#Temp').text(Data.main.temp);
    $('#temp_max').text(Data.main.temp_max);
    $('#temp_min').text(Data.main.temp_min);
    $('#pressure').text(Data.main.pressure);
}