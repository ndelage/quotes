$(document).ready(function() {
  init();
});

function init() {
  new QuoteView($("#new_quote"), new Quote());
}
