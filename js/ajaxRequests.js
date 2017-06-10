// AJAX request for fetching new Quote
		document.getElementById('fetchQuote').onclick = function() {
		  if (window.XMLHttpRequest) {
		  	var xhttp = new XMLHttpRequest();
		  }
		  else{
		  	//for Old IE browsers
		  	var xhttp = new ActiveXObject("Microsoft.XMLHTTP");
		  }
		  xhttp.onreadystatechange = function() {
		    if (this.readyState == 4 && this.status == 200) {
		     quoteUrl = JSON.parse(this.responseText).url;
		     document.getElementById('quoteContainer').src = quoteUrl;

		    }
		  };
		  xhttp.open("GET", quoteAPI, true);
		  xhttp.send();
		}