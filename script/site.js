
$.noConflict();

jQuery(function($) {
  $("html").removeClass("nojs");
  $("html").addClass("hasjs");

  $("#email").on("keyup", function() {
    var currentValue = $("this");
    var validPattern = $("this").attr("pattern");
    console.log(currentValue, validPattern);
    if(currentValue.match(validPattern)) {
      $("#submit").addClass("active");
    }
    else {
      $("#submit").removeClass("active");
    }
  });
});