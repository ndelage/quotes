class SessionsController < ApplicationController
  def create
    user = User.find_by(email: params[:email])
    if user && user.authenticate(params[:password])
      session[:user_id] = user.id
      redirect_to user_quotes_path(user)
    else
      render :new
    end
  end

  def new

  end
end
