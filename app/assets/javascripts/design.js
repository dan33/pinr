$(document).ready( function () {





// Key Bindings
$('.login_button').click(function () {
	event.preventDefault();
	$('#loginform').toggleClass('invisible');
});

$('.login_submit').click(function () {
	$('#loginform').addClass('invisible');
});

});