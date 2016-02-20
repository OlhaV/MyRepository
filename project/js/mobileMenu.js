//mobile menu functionality

jQuery(function($) {
	var screenWidth = document.body.clientWidth;
	
	if(screenWidth < 640) {
		$('.mobile_menu').on('click', smMenu);
//		$('.mobile_menu').on('tap', smMenu);
	}

	function smMenu(){
		$('nav').toggleClass('expand');
		$('.mobile_menu').toggleClass('active');
	};
});

