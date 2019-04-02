/*

- Sign up for openweathermap.org and generate an API key.
- User either $.ajax or $.get to pull weather current data .
  for Washington DC (hint: http://api.openweathermap.org/data/2.5/weather?q=...).
- Print the temperature in console.
- Bonus 1: add a form prompting user for the city and state.
- Bonus 2: convert answer from kelvin to fahrenheit.

*/

'use strict';
function get_weather() {
  var weatherUrl = "http://api.openweathermap.org/data/2.5/weather";
  // var userinput = 'London';
  var userInput = document.getElementById('city').value;
  var appid = "4b82ca4c2fe09a828d373ad50f1557ce";


  $.ajax({
    url: weatherUrl,
    type: 'GET',
    data: {
      q: userInput,
      appid: appid
    },
    success: function (response) {

      console.log(response)

      for (var key in response) {
        if (response.hasOwnProperty(key)) {
          var value = response[key];

          if (typeof value !== 'object') {
            var node = document.createElement("LI");
            var textnode = document.createTextNode(" " + key + ' : ' + value);
            node.appendChild(textnode);
            document.getElementById("myList").appendChild(node);
          }
          else {
            for (var key in value) {
              if (value.hasOwnProperty(key)) {
                var value2 = value[key];

                if (typeof value2 !== 'object') {
                  var node = document.createElement("LI");
                  var textnode = document.createTextNode(" " + key + ' : ' + value2);
                  node.appendChild(textnode);
                  document.getElementById("myList").appendChild(node);
                }


              }
            }
          }

        }
      }



    },
    error: function (e) {
      // console.log(e);
    }
  })
}




var button = document.getElementById('search');
button.onclick = get_weather;



//   var userInput = 'r2';
//   var starWarsUrl = 'https://swapi.co/api/people/?search=r2';
//   $.ajax({
//     url: starWarsUrl,
//     type: 'GET',
//     data: {
//       search: userInput

//     },
//     success: function (response) {
//       console.log(response);
//     }
//     })

//   $.get(' https://data.cityofnewyork.us/api/views/jb7j-dtam/rows.json?accessType=DOWNLOAD', function (response) {
//     console.log(response);
//   })
// })();