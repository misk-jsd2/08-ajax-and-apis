
'use strict';
(function () {
  var weatherUrl = "http://api.openweathermap.org/data/2.5/weather";
  var appid = 'e2c700d24d56606840b2457c8bce39b6';



  window.onload = function() {
    var button = document.getElementById('city-button');
    var userInput = document.getElementById('city');


    var $button = $('#city-button');

    button.onclick = function(event) {
      event.preventDefault();
      var mycity = userInput.value;
      if (mycity === '') {
        alert('You must type in a value!');
      } else {

          $.ajax({
            url: weatherUrl,
            type:'GET',
            data: {
              q : userInput,
              appid : appid,
            },
            success: function (response) {
              console.log(response);

            }
          })
      }
    };

}
})();
