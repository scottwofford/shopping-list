$(document).ready(function() {
	$("#add-button").click(function() {
		var i, l;
		i = $('input').val(); /* value of the input */
		l = $('#list'); /* ul ele */
		l.append('<li class="item"><input type="checkbox" class="check-box"><span class="item-text">' + i + '</span></li>');
	});
});







