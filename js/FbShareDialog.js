// Using Facebook Share Dialog
		document.getElementById('shareBtn').onclick = function() {
		  FB.ui({
		    method: 'share',
		    display: 'popup',
		    href: quoteUrl,
		  }, function(response){});
		}