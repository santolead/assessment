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
		initMenu();
		initModal();
	});
	
	function initMenu(){
		$(".menu-list").css({"display":"none"});
		$('.menu-title').click(function () {
			$('.menu-list').stop().slideToggle('fast');
		});
	};

	function initModal(){
		// Click event function to open modal (active)
		$(".modal-btn").on("click", function(){
			$(".modal-overlay").addClass("modal-in");
		});

		// Remove Class Active.
		function closeModal(){
			$(".modal-overlay").removeClass("modal-in");
		}

		// Function to close the modal screen
		$(".close, .modal-overlay").on("click", function(){
			closeModal();
		});
	};

})(jQuery);