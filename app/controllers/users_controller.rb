class UsersController < ApplicationController

  def index
    @users = User.all
    render json: @users
  end

  def create
    @user = User.new(user_params)
    # @user.seeker_profile = SeekerProfile.new(seeker_params)
    if @user.save!
      render json: @user
      # render json: @user, serializer: UserSpecificSerializer
    else
      render json: @user.errors.full_messages, status: 400
    end
  end

  def update
    # @user = User.find(params[:id])
    # if @user.update!(user_params)
    #   render json: @user
    # else
    #   render json: @user.errors.full_messages, status: 400
    # end
  end

  private

  def user_params
    params.require(:user).permit(:username, :password, :location, :about)
  end
end
