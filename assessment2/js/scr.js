/*! scr.js
-----------------------------------------------------
 *	THEME V.1.0
 *	Designed by Santo
 *	Website www.softwareseni.com
-------------------------------------------------- */

jQuery(document).ready(function($){
	$('#smoothup').on('click', function(){
		$('html, body').animate({scrollTop:0}, 'fast');
		return false;
	});
});