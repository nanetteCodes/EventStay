$(document).ready(function() {
  $('.parallax').parallax();


  $('.collapsible').collapsible();
});
var options = [{
  selector: '#eventResults',
  offset: 400,
  callback: function(el) {
    Materialize.showStaggeredList($(el));
  }
}, ];
Materialize.scrollFire(options);