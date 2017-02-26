

$(function () {
  $(document).ready(
    function() {
      $('html').removeClass('nojs');
      $('html').addClass('hasjs');
    }
  );
  $('.river-definition').on('click', function (e) {
    e.preventDefault();
    $(this).parent('.river-info').children('.for-background:visible').slideUp('slow');
    $(this).nextUntil('.river-definition').filter(':not(:visible)').slideDown('slow');
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

