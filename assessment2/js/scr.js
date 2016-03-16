/*! scr.js
-----------------------------------------------------
 *	THEME V.1.0
 *	Designed by Santo
 *	Website www.softwareseni.com
-------------------------------------------------- */
(function($){
    "use strict";

	/* On Document Ready */
	$(document).ready(function() {
		initSwitch();
		initToTop()
	});

	function initSwitch(){
		$('button').on('click',function(e) {
			if ($('.list-view').hasClass('show')) {
				$('.list-view').removeClass('show').addClass('hide');
				$('.grid-view').removeClass('hide').addClass('show');
			}
			else if($('.grid-view').hasClass('show')) {
				$('.grid-view').removeClass('show').addClass('hide');
				$('.list-view').removeClass('hide').addClass('show');
			}
		});
	};

	function initToTop(){
		$('#toTop').on('click', function(){
			$('html, body').animate({scrollTop:0}, 'slow');
			return false;
		});
	};

})(jQuery);
