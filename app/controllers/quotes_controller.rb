class QuotesController < ApplicationController

  def index
    redirect_to :root unless current_user

    @user = User.find(params[:user_id])
    @quotes = @user.quotes.where(published: true)
  end

  def new
    @quote = current_user.quotes.build
  end

  def create
    quote = Quote.new(create_params)

    if quote.save
      redirect_to user_quotes_path(current_user)
    else
      render :new
    end
  end

  private
  def create_params
    params.require(:quote).permit(:user_id, :body, :author)
  end
end
