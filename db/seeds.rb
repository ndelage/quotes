user = User.create!(email: "nate@dbc.com", password: "password", password_confirmation: "password")

[
  ["Get your facts first, then you can distort them as you please.", "Mark Twain"],
  ["Apparently there is nothing that cannot happen today.", "Mark Twain"],
  ["Good friends, good books and a sleepy conscience: this is the ideal life.", "Mark Twain"],
  ["Be careful about reading health books. You may die of a misprint.", "Mark Twain"]
].each do |q|
   user.quotes << Quote.new(body: q[0], author: q[1])
 end
