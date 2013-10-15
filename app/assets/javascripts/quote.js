$(document).ready(function() {
  $("#quote_body").on('keyup', function() {
    var currentCount = $(this).val().length;
    $("#count").html(currentCount);

    if(currentCount > 20) {
      $("#body-length-status").addClass("over-limit");
    } else {
      $("#body-length-status").removeClass("over-limit");
    }
  });


  $("#new_quote").on('submit', function(e) {
    e.preventDefault();
    var form = this;
    $.post( $(this).attr('action'),
            $(this).serialize() ).done(function(r) {
              form.reset();
            });
  });
});
