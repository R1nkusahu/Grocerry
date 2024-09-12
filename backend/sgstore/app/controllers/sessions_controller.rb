
# class SessionsController < ApplicationController
#   # Signup Action
#   def signup
#     user = User.new(user_params)
#     if user.save
#       session[:user_id] = user.id
#       render json: { status: :created, user: user }
#     else
#       render json: { status: 500, errors: user.errors.full_messages }
#     end
#   end

#   # Login Action
#   def login
#     user = User.find_by(email: params[:email])
#     if user && user.authenticate(params[:password])
#       session[:user_id] = user.id
#       render json: { status: :logged_in, user: user }
#     else
#       render json: { status: 401, errors: 'Invalid email or password' }
#     end
#   end

#   # Logout Action
#   def logout
#     reset_session
#     render json: { status: :logged_out }
#   end

#   # Current User Action
#   def current_user
#     if session[:user_id]
#       user = User.find(session[:user_id])
#       render json: { user: user }
#     else
#       render json: { message: "No logged in user" }
#     end
#   end

#   private

#   def user_params
#     params.require(:user).permit(:email, :password, :password_confirmation)
#   end
# end
class SessionsController < ApplicationController
  # Signup Action
  def signup
    user = User.new(user_params)
    if user.save
      session[:user_id] = user.id
      render json: { status: :created, user: user.as_json(only: [:id, :email]) }, status: :created
    else
      render json: { status: :unprocessable_entity, errors: user.errors.full_messages }, status: :unprocessable_entity
    end
  end

  # Login Action
  def login
    user = User.find_by(email: params[:email])
    if user && user.authenticate(params[:password])
      session[:user_id] = user.id
      render json: { status: :logged_in, user: user.as_json(only: [:id, :email]) }, status: :ok
    else
      render json: { status: :unauthorized, errors: 'Invalid email or password' }, status: :unauthorized
    end
  end

  # Logout Action
  def logout
    reset_session
    render json: { status: :logged_out, message: "Successfully logged out" }, status: :ok
  end

  # Current User Action
  def current_user
    if session[:user_id]
      user = User.find(session[:user_id])
      render json: { user: user.as_json(only: [:id, :email]) }, status: :ok
    else
      render json: { message: "No logged-in user" }, status: :not_found
    end
  end

  private

  def user_params
    params.require(:user).permit(:email, :password, :password_confirmation)
  end
end
