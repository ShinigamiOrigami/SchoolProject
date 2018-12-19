$(function() {
  $('#tile-container').children().height($('#tile').css('width'));
  $(window).resize(function() {
    $('#tile-container').children().height($('#tile').css('width'));
  });
});
