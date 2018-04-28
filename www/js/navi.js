function goto_page(href,side,need_internet) {
	if (window.cordova)
	{
		var networkState = navigator.connection.type;
		if ((networkState == Connection.NONE) && need_internet) {
			navigator.notification.alert(
				'برای مشاهده این صفحه به اینترنت نیاز دارید',  // message
				alertDismissed,         // callback
				'توجه',            // title
				'تائید'                  // buttonName
			);
			function alertDismissed(){};
		}
		else
		{
			if ( device.platform == 'iOS' )
			{
				var options_back = {
				  "direction"		:	side,//"left", // "up", // 'left|right|up|down', default 'left' (which is like 'next')
				  "duration"		:	700, // in milliseconds (ms), default 400
				  "androiddelay"	:	130, // same as above but for Android, default 70
				  "href"			:	href //"adab.html"
				};
				window.plugins.nativepagetransitions.slide(
				  options_back,
				  function (msg) {console.log("success: " + msg)}, // called when the animation has finished
				  function (msg) {console.log("error: " + msg)} // called in case you pass in weird values
				);
			}
			else
			{
				var options_back = {
				  "direction"		:	side,//"left", // "up", // 'left|right|up|down', default 'left' (which is like 'next')
				  "duration"		:	900, // in milliseconds (ms), default 400
				  "iosdelay"		:	110,
				  "androiddelay"	:	280, // same as above but for Android, default 70
				  "href"			:	href //"adab.html"
				};
				window.plugins.nativepagetransitions.slide(
				  options_back,
				  function (msg) {console.log("success: " + msg)}, // called when the animation has finished
				  function (msg) {console.log("error: " + msg)} // called in case you pass in weird values
				);
			}
		}
	} else {
		window.location.href = href;
	}

}