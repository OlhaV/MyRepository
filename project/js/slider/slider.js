function Slider(sSelector) {
	var s = this;


//------------------properties-------------------

	s.init(sSelector);
	
	s.image = s.find('#img');
	s.prev = s.find('#left');
	s.next = s.find('#right');
	s.bullets = s.find('.sliderBullet');
	
	
	s.ticker = null;
	s.imageCount = 1;
	s.total = 4;
	s.seconds = 5000;

	
//-------------------methods---------------------

	
	s.slide = function (iShift) {

		s.imageCount = s.imageCount + iShift;
		
		if(s.imageCount > s.total) {
		s.imageCount = 1;
		} if (s.imageCount < 1) {
			s.imageCount = s.total;
		}
		s.image.attr('src', 'images/slider' + s.imageCount + '.png');
        
		
        s.bullets.removeClass('active');
        s.bullets.eq(s.imageCount-1).addClass('active');

	}
    

    
	s.bulletClick = function(event) {
		s.stopAutoSlider();
        
		s.imageCount = 1;
		s.imageCount = s.bullets.index(event.target) + 1;
        
		s.bullets.removeClass('active');
		$(this).addClass('active');
        
		s.image.attr('src', 'images/slider' + s.imageCount + '.png');
        
		s.autoSlide();
	}
	
	
	s.showPrev = function() {
        
		s.stopAutoSlider();
		s.slide(-1);
		s.autoSlide();
	}
	
	
	s.showNext = function() {

        s.stopAutoSlider();
		s.slide(1);
		s.autoSlide();
	}
	
	
	s.auto = function() {
		s.slide(1);
	}
	
	
	// Automated slider
	s.autoSlide = function() {
		s.ticker = window.setInterval(s.auto,s.seconds);
	}
	
	
	s.stopAutoSlider = function() {
		window.clearInterval(s.ticker);
	}


//--------------------events---------------------
	
	s.autoSlide(s.showNext);
	s.prev.click(s.showPrev);
	s.next.click(s.showNext);
	s.bullets.click(s.bulletClick);
	s.image.mouseover(s.stopAutoSlider);
	s.image.mouseout(s.autoSlide);
	
}

Slider.prototype = new Component();