function Calculator(sSelector) {
	var c = this;
	
	/* --------------- properties ----------------- */
	
	c.calculator = $(sSelector);
	
	c.numbers = c.calculator.find('.number');
	c.operators = ['+', '-', '*', '/'];
    c.operatorButtons = c.calculator.find('.operator');
    c.dot = c.calculator.find('.dot');
	c.clear = c.calculator.find('.clear');
	c.equals = c.calculator.find('.equals');
	c.result = c.calculator.find('#result');
	c.buttons = c.calculator.find('p');
    c.keys = c.calculator.find('.key');
    
    c.dotAdded = false;
    c.errorMessage = 'You cannot devide by zero';
    
	/* ----------------- methods ------------------- */	
    
    /* when you click on number */ 
    c.numberClicked = function() {
        
        /* if there is a message in the result field, first it is erased */
        if(c.result.html() == c.errorMessage) {
            c.clearResult();
        }
        /* then a number added */
        c.result.append($(this).html());
    }
    
    /* when you click on operator */
    c.operatorClicked = function() {
        c.dotAdded = false;
        /* check if the result field is not empty*/
        if(c.result.html()) {
        
            /* check if the last character is an operator or a dot */
            if(c.operators.indexOf(c.result.text().slice(-1)) > -1 || c.result.html().slice(-1) == '.') {
//как сократить эту часть? 
                var result = c.result.html().slice(0, c.result.html().length - 1);
                c.result.html(result);
                c.result.append($(this).html());

    //            почему не работает replace?
    //            c.result.html().replace(c.result.text().slice(-1), $(this).html());
            }
            
            /* if there is a message in the result field, first it is erased */
            else if(c.result.html() == c.errorMessage) {
                    c.clearResult();
                }

            else {
                c.result.append($(this).html());
            }
        }
        
        /* check if the result field is empty */
        else if($(this).html() == '-') {
            c.result.append($(this).html());
        }
    }
    
    /* when you click on a dot */
    c.dotClicked = function() {
        /* check if there is no dot yet in the result field and if the last symbol is not an operator*/
        if(!c.dotAdded) {
            /* check if the result field is not empty */
            if(c.result.html()) {
                c.result.append('.');
            } 
            /* if the result field is empty, append zero+dot */
            else {
                c.result.append('0.');
            }
            
            c.dotAdded = true;
        }
    }
    
    /* clear the result field */
    c.clearResult = function() {
        c.dotAdded = false;
        c.result.html('');
    }
    
    /* calculate the expression in the result field */
    c.calculate = function() {
        /* check if you try to devide by zero */ 
        if(c.result.html().slice(-2) == '/0') {
            /* display in the result field the message */
            c.result.html(c.errorMessage);
        } 
        
        /* check if the last symbol is operator or dot */
        else if(c.operators.indexOf(c.result.html().slice(-1)) > -1 || c.result.html().slice(-1) == '.') {
            
        /* remove the last symbol from the result field */     
            c.result.html(c.result.html().slice(0, c.result.html().length - 1));
        }
        
        /* else - calculate */
        if(c.result.html() && c.result.html() != c.errorMessage) {
            c.result.html(eval(c.result.html()));     
        }
        
        /* change the value of c.dotAdded property to "false" if there is no dot in calculated result */
        if(c.result.html().indexOf('.') > -1) {
            c.dotAdded = true;
        }
        else {
            c.dotAdded = false;
        }
    }
    
    
	c.push = function() {
		$(this).addClass('clicked');
	}
	
    
	c.release = function() {
		$(this).removeClass('clicked');
	}
	
	
	
	/* ------------------ events ------------------- */	
	
    c.numbers.click(c.numberClicked);
    c.operatorButtons.click(c.operatorClicked);
    c.dot.click(c.dotClicked);
    
	c.equals.click(c.calculate);
	c.clear.click(c.clearResult);
	
	c.buttons.mousedown(c.push);
	c.buttons.mouseup(c.release);
    c.buttons.mouseleave(c.release);
	
}








