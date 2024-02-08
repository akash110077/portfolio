$(document).ready(function(){
  function bookstoreFunction(y) {
    if (y.matches){
      $(".mob-sidebar-hidden").addClass("sidebar-hidden");
      var s = $(".floating_btn");
      var pos = s.position();
      var x = $(".mob-book-cta");
      var pos2 = x.position();
      $(window).scroll(function() {
        var windowpos = $(window).scrollTop() - 120;
        if (windowpos >= pos.top) {
          s.addClass("stick").css("display", "block");
        }
        if (windowpos >= pos2.top) {
          x.addClass("stick").css("display", "block");
        }
        else {
          s.removeClass("stick").css("display","none");
        }
      });
    }
  }
  var y = window.matchMedia("(max-width: 991px)")
  bookstoreFunction(y) // Call listener function at run time
  y.addListener(bookstoreFunction) // Attach listener function on state changes
});
