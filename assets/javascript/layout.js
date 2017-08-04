$(document).ready(function(){
      $('.parallax').parallax();
    });
var options = [
       {selector: '#eventResults', offset: 400, callback: function(el) {
        Materialize.showStaggeredList($(el));
      } },
    ];
    Materialize.scrollFire(options);
    