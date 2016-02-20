var isCalculated = false;
var Numbers = document.querySelectorAll(".numbers button");
var Operators = document.getElementsByClassName("operators");
var Result = document.getElementsByClassName("result")[0];
var Equals = document.getElementById("equals");
var minus = document.getElementById("minus");
var point = document.getElementById("point");
var backspace = document.getElementById("backspace");

function clear() {
	Result.placeholder = '';
}
// to calculate the result
function calculate() {
	if(Result.placeholder[Result.placeholder.length - 1] == 0 && Result.placeholder[Result.placeholder.length - 2] == '/') {
		isCalculated = true;
		Result.placeholder = "Cannot devide by zero";
	} else {
		isCalculated = true;
		Result.placeholder = eval(Result.placeholder);
	} 
}
//clicking on backspace
backspace.addEventListener('click', function backspace(e) {
	if(Result.placeholder != "Cannot devide by zero") {
	Result.placeholder = Result.placeholder.slice(0, Result.placeholder.length - 1);
	} if(isCalculated) {
		clear();
	}
});


//clicking on point
point.addEventListener('click', function(e){
	if(Result.placeholder == "") {
		Result.placeholder = 0 + e.target.innerHTML;
	} if(Result.placeholder[Result.placeholder.length - 1] == Numbers) {
		Result.placeholder += e.target.innerHTML;
	} if(Result.placeholder[Result.placeholder.length - 1] == '+' || Result.placeholder[Result.placeholder.length - 1] == '-' || Result.placeholder[Result.placeholder.length - 1] == '/' || Result.placeholder[Result.placeholder.length - 1] == '*') {
		return;
	} else {
		Result.placeholder += e.target.innerHTML;
	}	
});


//clicking on numbers 
for (var i = 0; i < Numbers.length; i++) {
	var number = Numbers[i];
	if (number.addEventListener) {
		number.addEventListener("click", function (e) {
			if (isCalculated) {
			Result.placeholder = e.target.innerHTML;
			isCalculated = false;
			} else {
			Result.placeholder += e.target.innerHTML;
			}
		});	
	}
}
//clicking on operators 
for (var i = 0; i < Operators.length; i++) {
	var operator = Operators[i];
	if (operator.addEventListener) {
		operator.addEventListener('click', function (e) {
			if (Result.placeholder == '' && e.target.innerHTML != "-") { return;
			} if (isCalculated && Result.placeholder != NaN) {
				isCalculated = false;
			} if (Result.placeholder[Result.placeholder.length - 1] == '+' || Result.placeholder[Result.placeholder.length - 1] == '-' || Result.placeholder[Result.placeholder.length - 1] == '/' || Result.placeholder[Result.placeholder.length - 1] == '*') {
				Result.placeholder = Result.placeholder.slice(0, Result.placeholder.length - 1) + e.target.innerHTML;
			} else {
				Result.placeholder += e.target.innerHTML; 
			}
		});
	}
}

//calculation 
Equals.addEventListener ('click', function() {
	if (Result.placeholder == '') {
		return; 
	} if (!calculate) {
		return
	} else {
		calculate();
	}
});

document.getElementById('clear').addEventListener('click', clear);