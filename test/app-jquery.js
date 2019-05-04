$(document).ready(function(){
 $('#btn').click(function(){

var city = $("#city").val();

if (city != ''){
$.ajax({
    url: 'http://api.openweathermap.org/data/2.5/weather?q=' + "&units=metric" +
    "&APPID=f10455a4d92b4736cdd7404b7dc60cd9",
    type: "GET",
    dataType: "jsonp",

    success: function(date){
    	console.log(data);
        // $("#result").html(date); 
 }
    });
}else{
	$("$error").html('field cannot be empty');

    }


  });

}); 