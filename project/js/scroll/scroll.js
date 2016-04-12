function Scroll(sSelector) {
	var s = this;
	
	//----------------------methods-----------------------
	
	s.slowScroll = function(event) {
		event.preventDefault();
		$('html,body')
			.stop()
			.animate({scrollTop:0},'slow');
	}
	
	s.showHideTopBtn = function() {
		if($(window).scrollTop() > $(window).height()/4) {
			s.topBtn.fadeIn(500);
		} else {
			s.topBtn.fadeOut();
		}
		
	}
	
	//---------------------main method--------------------
	
	s.main = function() {
		s.init(sSelector);
		
		//---------------properties--------------
		
		s.topBtn = s.find('.topBtn');
		
		//---------------events------------------
		
		$(window).scroll(s.showHideTopBtn);
		s.topBtn.click(s.slowScroll);
		
	}
	
	$(document).ready(s.main);
	
	
}

Scroll.prototype = new Component;