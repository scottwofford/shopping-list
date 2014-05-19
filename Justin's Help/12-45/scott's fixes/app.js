$(document).ready(function() {
	$('#add-button').mousedown(function() {
		var i, l;
		i = $('#input-node').val(); /* value of the input */
		l = $('#list'); /* bullet list element */
		l.append('<li class="item"><input type="checkbox"
			 class="check-box"><span class="item-text">' + i + 
			'</span></li>');
	});
	$('.check-box').mousedown(function(){
		/* this is close but doesn't work */
		var t = $(this);
		var p = t.parent();
		var f = p.find('.item-text');

		console.log(t);
		console.log('');
		console.log(p);
		console.log('');
		console.log(f);

		f.toggleClass('selected');
		//$(this).parent().find('.item-text')
		// .toggleClass('selected');
	});


});
