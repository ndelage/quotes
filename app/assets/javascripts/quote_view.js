function QuoteView(el, quote) {
  this.el = el;
  this.quote = quote;

  var self = this;
  el.on('submit', function(e) {
    e.preventDefault();
    self.updateQuote();

    self.quote.save().done(function(r) {
      self.el[0].reset();
      self.updateQuote();
      self.updateCharacterCount();
    });
  });

  el.find("#quote_body").on('keyup', function() {
    self.updateQuote();
    self.updateCharacterCount();
  });
}

QuoteView.prototype.updateQuote = function() {
  this.quote.body = this.el.find("#quote_body").val();
  this.quote.author = this.el.find("#quote_author").val();
}

QuoteView.prototype.updateCharacterCount = function() {
  var currentCount = this.quote.body.length;
  this.el.find("#count").html(currentCount);
  if(this.quote.isOverLimit()) {
    this.el.find("#body-length-status").addClass("over-limit");
  } else {
    this.el.find("#body-length-status").removeClass("over-limit");
  }
}
