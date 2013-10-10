class SearchController < ApplicationController

  def create
    @quotes = Quote.where("published = 't' AND body LIKE '%#{params[:search]}%'")

    render :results
  end
end
