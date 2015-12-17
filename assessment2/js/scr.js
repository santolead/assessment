/*! scr.js
-----------------------------------------------------
 *	THEME V.1.0
 *	Designed by Santo
 *	Website www.softwareseni.com
-------------------------------------------------- */

jQuery(document).ready(function($){
	
	$('button').on('click',function(e) {
		if ($(this).hasClass('grid')) {
			$('#container ul').removeClass('list').addClass('grid');
		}
		else if($(this).hasClass('list')) {
			$('#container ul').removeClass('grid').addClass('list');
		}
	});
	
	$('#smoothup').on('click', function(){
		$('html, body').animate({scrollTop:0}, 'slow');
		return false;
	});
});