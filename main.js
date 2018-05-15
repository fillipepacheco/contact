// JavaScript Document
var inputs = $("input:text, textarea");

var validateInputs = function validateInputs(inputs) {
	var validForm = true;
	inputs.each(function(index) {
		var input = $(this);
		if (!input.val()) {
			$("#submit").attr("eneable", "eneable");
			validForm = false;
		}
	});
	return validForm;
}


inputs.each(function() {
	var input = $(this);
	input.keyup(function() {
		if (validateInputs(inputs)) {
			$("#submit").removeAttr("disabled");
		}
	});
});

var b = document.getElementById('submit');
b.addEventListener('click', function(e){
	alert("Message been sent sucessefuly!");
});
