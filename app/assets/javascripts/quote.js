function Quote(body, author) {
  this.body = body;
  this.author = author;
}

Quote.prototype.MAX_LENGTH = 20;
Quote.prototype.url = "/quotes";

Quote.prototype.isOverLimit = function() {
  return this.body.length > this.MAX_LENGTH;
}

Quote.prototype.save = function() {
  return $.post(this.url,
                {
                  "quote[body]": this.body,
                  "quote[author]": this.author
                });
}
