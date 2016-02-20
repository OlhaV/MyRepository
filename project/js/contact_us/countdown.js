function Windoww(sSelector) {
	var w = this;
	
	//---------------------properties---------------------
	
	w.myWindow = $(sSelector);
	w.startCountdownBtn = w.myWindow.find('.countdownBtn');
	w.countdownStopBtn = w.myWindow.find('.countdownStopBtn');
	w.countdownNote = w.myWindow.find('.countdownNote');
	w.countdownTime = 0;
	w.countdownPeriod = 1;
	
	
	//---------------------methods---------------------
	
	w.startCountdown = function() {
		w.count = window.setInterval(w.countdownNotification, w.countdownPeriod*1000);
	}
	
	w.countdownNotification = function() {
		w.countdownTime += w.countdownPeriod;
		w.countdownNote.html(w.countdownTime);
	}
	
	w.stopCountdown = function() {
		window.clearInterval(w.count);
	}
	
	//---------------------events---------------------
	
	w.startCountdownBtn.bind('click', w.startCountdown)
	w.countdownStopBtn.bind('click', w.stopCountdown)
}