console.log("js connected");

window.onload = function(){
    var header = document.createElement('h1');
    var text = document.createTextNode('Hello Misk!');
    header.appendChild(text);
    document.getElementById('header').appendChild(header);

    document.getElementById('color').onchange = function(){
        var getColor = document.getElementById('color').value;
        console.log(getColor);
        getColorAPI(getColor.slice(1));
    }

}

function getColorAPI(colorHex){
    var httpRequest = new XMLHttpRequest();
    httpRequest.onreadystatechange = responseMethod;
  
    function responseMethod() {
    if (httpRequest.readyState === XMLHttpRequest.DONE) {
        if (httpRequest.status === 200) {
        	var jsonData = httpRequest.responseText;
        	var jsData = JSON.parse(jsonData);
        	setName(jsData);
          console.log(jsData);
        } else {
          console.log('There was a problem with the request.');
        }
      }

    }
    httpRequest.open('GET', `http://www.thecolorapi.com/id?hex=${colorHex}`);
    httpRequest.send();
}

function setName(colorObject){
	document.getElementById("colorName").innerHTML = '';
	var color = document.createTextNode(colorObject.name.value)
	document.getElementById('colorName').appendChild(color);
}