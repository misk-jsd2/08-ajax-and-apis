var HttpRequest = new XMLHttpRequest();
​
  HttpRequest.onreadystatechange = responseM;
  function responseM(){
​
	  if (HttpRequest.readyState === XMLHttpRequest.DONE) {
	   if (HttpRequest.status === 200) {
	    console.log(HttpRequest.response);
	   } else {
	    console.log('request error');
	   }
​
	 }
	 HttpRequest.open('GET', ' http://api.openweathermap.org/data/2.5/weather');
	 HttpRequest.send();
​
	};
​
  })();