function Quote(body, author) {
  this.body = body;
  this.author = author;
}

Quote.prototype.URL = "/quotes";
Quote.prototype.maxLength = function() {
  return 140;
}

Quote.prototype.isOverLimit = function() {
  return this.body.length > this.maxLength();
}

Quote.prototype.save = function() {
  return $.post(this.URL,
                this.postParams());

}

Quote.prototype.postParams = function() {
  return {
            "quote[body]": this.body,
            "quote[author]": this.author
          };
}
