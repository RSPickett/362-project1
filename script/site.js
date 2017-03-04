

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
    } else {
      $('#submit').removeClass('active');
    }
  });

  $('#signup').on('submit', function(event) {
    var name = $('#name').val();
    $('#response').append('Thank you ' + name + '.  We will be contacting you soon');
    $('email').val = "";
    event.preventDefault();
  })
});
