

$(function () {
  $(document).ready(
    function() {
      $('html').removeClass('nojs');
      $('html').addClass('hasjs');
    }
  );

  $('.river-definition').on('click', function (e) {
    e.preventDefault();
    $(this).parent('.river-info').children('.river-description:visible').slideUp('slow');
    $(this).nextUntil('.river-definition').filter(':not(:visible)').slideDown('slow');
  });

  $('#email').on('keyup focus blur', function() {
    var currentValue = $(this).val();
    var validPattern = $(this).attr('pattern');
    console.log(currentValue, validPattern);
    if(currentValue.match(validPattern)) {
      $('#submit').addClass('active');
      console.log("true");
    } else {
      $('#submit').removeClass('active');
      console.log("false");
    }
  });
});

// Tell jQuery to give up the dollar sign
// $.noConflict();
// Instead, use a self-invoking function to have a private
// dollar sign
// (function($){
//   $(document).ready(
//     function() {
//       $('html').removeClass('nojs');
//       $('html').addClass('hasjs');
//     }
//   );
// })(jQuery);

