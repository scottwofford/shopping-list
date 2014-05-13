$(document).ready(function() {

// listen for button click
$('#add-button').click(function(){
    var txtbox = document.getElementById('item');
    var txtval = txtbox.value;
    event.preventDefault();
    if(!$.trim($('#item').val())) {
    } else {
      $('<li class="items"></li>').appendTo('#list').html('<div class="box"></div><span>' + txtval + '</span><img class="delete" src="images/delete.png"/>');

    document.getElementById('item').value = '';
    };
  });

});