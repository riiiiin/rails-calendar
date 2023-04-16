class UsersController < ApplicationController
  def new
    @user = User.new()
  end

  def create
    user = User.new({:name => params['name'], :password => params['password'], :password_confirmation => params['password_confirmation']})
    logger.debug(user)
    if user.save
      session[:user_id] = user.id
      render json: { status: 200, user: user }
    else
      render json: { status: 500 }
    end
  end

  def me
  end

  private

  def users_params
    params.require(:user).permit(:name, :password, :password_confirmation)
  end

end
