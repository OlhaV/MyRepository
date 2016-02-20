function formValidation(sSelector) {
	var f = this;
	
	
	f.check = function() {
		
	}
	
	
	
	f.main = function() {
		
		f.init(sSelector);
		//------------------properties----------------
		f.textFields = f.find('.textfield');
		f.errorMessage = f.find('.error_form_message');
		

		//------------------events--------------------
		
		f.elem.submit(f.check);
		
		
	}
	
	
}