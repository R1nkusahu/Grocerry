class UsersController < ApplicationController
  def create
    user = User.new(user_params)
    if user.save
      render json: { status: 'created', user: user }
    else
      render json: { errors: user.errors.full_messages }, status: :unprocessable_entity
    end
  rescue => e
    render json: { error: e.message }, status: :internal_server_error
  end

  private

  def user_params
    params.require(:user).permit(:email, :password, :password_confirmation)
  end
end
