


// console.log("connected :)")
$(document).ready(function(){

  // $.get('https://api.openweathermap.org/data/2.5/weather?&q=London,uk&appid=ad9a90ea3d1b1ce65aa547a79ef63558')
  //   .then(response => {
  //     console.log(response)
  //   })
console.log("connected :)")

// getCityWeather("london");

var $button = $('#searchBut');
var $userInputs = $('#userInput');

$button.on('click', function(event) {
  event.preventDefault();
  var newUserInputs = $userInputs.val();
  console.log(newUserInputs);
  if (newUserInputs === '') {
    alert('You must type in a value!');
  } else {
getCityWeather(newUserInputs);
   // $userInputs.val('');
  }
});



});
function getCityWeather(city){
    var url = 'https://api.openweathermap.org/data/2.5/weather?';
    $.ajax({
        url: url,
        type: 'GET',
        data: {
            q: city,
            appid: "ad9a90ea3d1b1ce65aa547a79ef63558"
        },
        success: function(response) {
            console.log(response);
            var temp = response.main.temp;
            console.log(temp);

            showWeather(response);
            //console.log(response);
        }
    });
}

function showWeather(cityInformation){
  console.log("see the weather");
var temp = cityInformation.main.temp;
$('#kelvinSpan').text(temp);

toFahrenheit(temp);
}
function toFahrenheit(temp){
  var fahrenTemp = (temp*9/5)-459.67;
  $('#fahrenheitSpan').text(fahrenTemp);
}