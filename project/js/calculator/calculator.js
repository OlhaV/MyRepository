function Calculator(sSelector) {
	var c = this;
	
	/* --------------- properties ----------------- */
	
	c.calculator = $(sSelector);
	
	c.numbers = c.calculator.find('.number');
	c.operators = c.calculator.find('.operator');
	c.clear = c.calculator.find('.clear');
	c.equals = c.calculator.find('.equals');
	c.result = c.calculator.find('#result');
	c.buttons = c.calculator.find('.button');
	
	
	/* ----------------- methods ------------------- */	
	
	c.push = function() {
		$(this).addClass('clicked');
	}
	
	c.release = function() {
		$(this).removeClass('clicked');
	}
	
	
	
	/* ------------------ events ------------------- */	
	
	c.buttons.mousedown(c.push);
	c.buttons.mouseup(c.release);
	
	
	
	
}