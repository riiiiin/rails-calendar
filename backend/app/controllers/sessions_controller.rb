class SessionsController < ApplicationController
  def create
    user = User.find_by(name: params[:name])
    if user && user.authenticate(params[:password])
      session[:user_id] = user.id
      render json: { status: 200, user: user }
    else
      render json: { status: 500 }
    end
  end

  def destroy
  end
end
