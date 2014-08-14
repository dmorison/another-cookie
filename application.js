$(document).ready(function(){

	function setCookie(cname, cvalue, cend) {
		var d = new Date();
		d.setTime(d.getTime() + (cend*24*60*60*1000));
		var expires = 'expires=' + d.toGMTString();
		document.cookie = cname + '=' + cvalue + '; ' + expires;
	}

	function getCookie(cname) {
	    var name = cname + '=';
	    var ca = document.cookie.split(';');
	    for(var i = 0; i < ca.length; i++) {
	        var c = ca[i];
	        while (c.charAt(0)==' ') c = c.substring(1);
	        if (c.indexOf(name) != -1) {
	            return c.substring(name.length, c.length);
	        }
	    }
	    return "";
	}

	function checkCookie() {
		var user = getCookie('warning');
		if (user != '') {
			$('#cookieWarning').css('display', 'none');
			alert('I the monster have ' + user + ' the cookie!');
		} else {
			$('#cookieWarning').css('display', 'block');
			$('#accept').click(function(){
				$('#cookieWarning').css('display', 'none');
				setCookie('warning', 'eaten', 2);
				return false;
			});
		}
	}

	checkCookie();

});