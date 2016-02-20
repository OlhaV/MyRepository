function Contact(sSelector) {
	var f = this;
	
	//properties 
	f.init(sSelector);
	
	f.fName = f.find('#firstName');
	f.lName = f.find('#lastName');
	f.email = f.find('#email');
	f.phone = f.find('#phone');
	f.contacts = f.find('.howToContact');
	f.feedback = f.find('.feedback');
	
	//methods
	f.showInfo = function() {
		var contactMe = f.contacts.filter(':checked');
		var message = 'My name is ' + f.fName.val() + ' ' + f.lName.val() + '.' 
					+ '\n' + 'You can contact me by ' + contactMe.val() + ' ';
		
		if(contactMe.val() == 'phone') {
			message += f.phone.val();
		} else if(contactMe.val() == 'email') {
			message += f.email.val();
		}
		
		message += '\n' + 'Мой отзыв ' + f.feedback.val();
		console.log(message);
	}
	
	f.translate = function() {
		
		var langs = settings.get('langs');
		
		var currentLang = $(this).html();
		
		$.each(langs, function(sClassName, aContent){
			$('.' + sClassName).html(aContent[currentLang]);
		});
	}


	//events
	$('.form_langs').click(f.translate);

	$('#send').click(function(event){
    	event.preventDefault();
		f.showInfo();
	});
}


Contact.prototype = new Component();




