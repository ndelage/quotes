//= require jquery
//= require quote
//
describe("Quote", function() {
  describe("#isOverLimit", function() {
    var quote;

    beforeEach(function() {
      quote = new Quote();
      quote.MAX_LENGTH = 2;
    });

    it("returns true when body.length is > MAX_LENGTH", function() {
      quote.body = "mary had a little lamb"

      expect(quote.isOverLimit()).toBeTruthy();
    });

    it("returns false when body.length is equal to MAX_LENGTH", function() {
      quote.body = "12";

      expect(quote.isOverLimit()).toBeFalsy();
    });

    it("returns false when body.length is < MAX_LENGTH", function() {
      quote.body = "1";

      expect(quote.isOverLimit()).toBeFalsy();
    });

  });
});
