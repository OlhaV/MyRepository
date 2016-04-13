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
    
    var calculated = false;
	
	
	/* ----------------- methods ------------------- */	
	
    c.display = function(event) {
        if(event.target.innerHTML != '=') {
            c.result.append($(this).html());
        } if (calculated) {
            c.result.html($(this).html());
            calculated = false;
        }
    
    }    
    
    
    c.clearResult = function() {
        c.result.html('');
    }
    
    
    c.calculate = function(event) {
        var result = c.result.html();
        var res = eval(result);
        c.result.html(res);
        
        calculated = true;
    }
    
    
	c.push = function() {
		$(this).addClass('clicked');
	}
	
    
	c.release = function() {
		$(this).removeClass('clicked');
	}
	
	
	
	/* ------------------ events ------------------- */	
	
    c.buttons.click(c.display);
    
    
	c.equals.click(c.calculate);
	c.clear.click(c.clearResult);
	
	c.buttons.mousedown(c.push);
	c.buttons.mouseup(c.release);
    c.buttons.mouseleave(c.release);
	
}