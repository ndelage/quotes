describe("Quote", function() {
  describe("#constructor", function() {
    var quote;

    beforeEach(function() {
      quote = new Quote("Eat less.", "Mark Twain");
    });

    it("assigns author", function() {
      expect(quote.author).toEqual("Mark Twain");
    });

    it("assigns body", function() {
      expect(quote.body).toEqual("Eat less.");
    });
  });

  describe("#isOverLimit", function() {
    it("returns false when body.length is less than maxLength", function() {

      var body = "12345";
      var quote = new Quote(body, "Mark Twain");
      spyOn(quote, 'maxLength').andReturn(body.length+1);

      expect(quote.isOverLimit()).toBe(false);
    });

    it("returns true when body.length is greater than maxLength", function() {

      var body = "12345";
      var quote = new Quote(body, "Mark Twain");
      spyOn(quote, 'maxLength').andReturn(body.length-1);

      expect(quote.isOverLimit()).toBe(true);
    });

  });


  describe("#save", function() {
    it("calls $.post with the correct URL", function() {
      var postSpy = spyOn($, 'post');

      var q = new Quote();
      q.save();
      expect(postSpy).toHaveBeenCalledWith(q.URL,
                                           jasmine.any(Object));
    });

    it("calls $.post with the quote params", function() {
      var postSpy = spyOn($, 'post');

      var q = new Quote("Eat Less.", "Mark Twain");
      var postSpy = spyOn(q, 'postParams').andReturn("theParams");
      q.save();

      expect(postSpy).toHaveBeenCalledWith(jasmine.any(String),
                                           "theParams");
    });
  });
});
