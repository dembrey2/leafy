class UsersController < ApplicationController

  def index
    @users = User.all
    render json: @users
  end

  def create
    @user = User.new(user_params)
    if @user.save!
      render json: @user, serializer: UserSpecificSerializer
    else
      render json: @user.errors.full_messages, status: 400
    end
  end

  def update
  end

  def destroy
  end

  private

  def user_params
    params.require(:user).permit(:username, :password, :location, :about, seeker_profile_attributes: [:first_name, :last_name], employer_profile_attributes: [:company_name])
  end
end
