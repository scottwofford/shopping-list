$(document).ready(function() {

// listen for button click
$('#add-button').click(function(){
    var txtbox = document.getElementById('item');
    var txtval = txtbox.value;
    event.preventDefault();

// add to list
    if(!$.trim($('#item').val())) {
    } else {
      $('<li class="items"></li>').appendTo('.list');
    }
  });
});