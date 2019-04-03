

// var cityName = $("#input").val();
var city =document.getElementById("input")
var cityName = ""
// var cityName =  $("#input").attr('value')

// var weatherUrl = 'https://api.openweathermap.org/data/2.5/weather';
// var userinput = 'London';
// var appid = '7dccb07991a7f8cfca8e8e36aa8ebe25';
// var weatherURL = "http://api.openweathermap.org/data/2.5/weather?q=" + cityName + "&units=metric&appid=7dccb07991a7f8cfca8e8e36aa8ebe25";


//  Create instance of XMLHTTPRequest
$('#getDataButton').on('click',function(){
    console.log($(city).val())
    cityName = $(city).val()

   
    $.ajax({
        url: "http://api.openweathermap.org/data/2.5/weather?q=" + cityName + "&units=metric&appid=7dccb07991a7f8cfca8e8e36aa8ebe25",
        type: "GET",
        data: {
            // q: cityName,
            // appid: appid
        },
        success: function (response) {
            console.log(response);
            $('#span').html('<li>' + fahad +  '</li>');
            

        }
          
          
    });
   

    });

    