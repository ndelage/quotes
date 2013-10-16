//= require jquery
//= require quote_view


describe("QuoteView", function() {
  describe("#updateQuote", function() {
    var quote;

    beforeEach(function() {
      quote = new Quote("original body", "original author");

      var el = $("<form id='new_quote'><input id='quote_body' \
                 value='mary had a little lamb'><input id='quote_author' \
                 value='mark twain'></form>");
      var view = new QuoteView(el, quote);
      view.updateQuote();
    });

    it("updates the quote's body", function() {
      expect(quote.body).toEqual("mary had a little lamb");
    });

    it("updates the quote's author", function() {
      expect(quote.author).toEqual("mark twain");
    });
  });

  describe("#bodyChanged", function() {
    var view;
    beforeEach(function() {
      view = new QuoteView($("<form></form>"), new Quote());

      spyOn(view, "updateQuote");
      spyOn(view, "updateLengthStatus");
      view.bodyChanged();
    });

    it("calls updateLengthStatus", function() {
      expect(view.updateLengthStatus).toHaveBeenCalled();
    });

    it("calls updateQuote", function() {
      expect(view.updateQuote).toHaveBeenCalled();
    });

  });
});
