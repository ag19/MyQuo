//Asyncrounous load for Facebook SDK ****** starts here ***********
		window.fbAsyncInit = function() {
	    FB.init({
	      appId            : '116101695651832',
	      autoLogAppEvents : true,
	      xfbml            : true,
	      version          : 'v2.9'
	    });
	    FB.AppEvents.logPageView();
	  };

	  (function(d, s, id){
	     var js, fjs = d.getElementsByTagName(s)[0];
	     if (d.getElementById(id)) {return;}
	     js = d.createElement(s); js.id = id;
	     js.src = "//connect.facebook.net/en_US/sdk.js";
	     fjs.parentNode.insertBefore(js, fjs);
	   }(document, 'script', 'facebook-jssdk'));
//Asyncrounous load for Facebook SDK ****** ends here ***********/