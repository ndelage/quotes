class UpvotesController < ApplicationController

  def upvote
    quote = Quote.find(params[:id])
    quote.update_attributes(upvotes: quote.upvotes+1)

    respond_to do |format|
      format.json do
        render json: quote
      end

      format.html do
        redirect_to user_quotes_path(current_user)
      end
    end

  end
end
