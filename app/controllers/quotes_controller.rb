class QuotesController < ApplicationController
  def index
    @user = User.find(params[:user_id])
    @quotes = @user.quotes
  end
end
