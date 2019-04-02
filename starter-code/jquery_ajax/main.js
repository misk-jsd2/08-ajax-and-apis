/*

- Sign up for openweathermap.org and generate an API key.
- User either $.ajax or $.get to pull weather current data .
  for Washington DC (hint: http://api.openweathermap.org/data/2.5/weather?q=...).
- Print the temperature in console.
- Bonus 1: add a form prompting user for the city and state.
- Bonus 2: convert answer from kelvin to fahrenheit.

*/

"use strict";
(function() {
  var keys = ["name", "wind", "main"];
  var btn = $("#btn");
  var input = $("#input");
  var weatherInfoDiv = $("<div></div>").css({ margin: "20px" });
  $("body").append(weatherInfoDiv);

  var appId = "59cb9f55209c4877359724cd25cfb175";
  var userInput = "riyadh";
  var weatherURL = "http://api.openweathermap.org/data/2.5/weather/";
  $.ajax({
    url: weatherURL,
    type: "GET",
    data: {
      q: userInput,
      appid: appId
    },
    success: res => {
      var cityDiv = $("<div></div>").append(`<h1>${res.name}</h1>`);
      var infoUl = $("<ul></ul>");
      keys.forEach(element => {
        let li = $("<li></li>")
        //work is not done
          .append(`<div> <strong>${element}:</strong>${res[element]}</div>`)
          .css({ padding: "10px" });
        $(infoUl).append(li);
      });

      $(weatherInfoDiv).append(cityDiv);
      $(cityDiv).append(infoUl);
    }
  });
})();
