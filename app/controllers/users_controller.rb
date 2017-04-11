class UsersController < ApplicationController

  before_action :require_user, only: [:index, :update, :show]
  before_action :require_self, only: [:update]

  def index
    @users = User.all
    render json: @users
  end

  def create
    @user = User.new(user_params)
    if @user.save!
      render json: @user, serializer: UserSpecificSerializer, include: ['seeker_profile.matched_jobs']
    else
      render json: @user.errors.full_messages, status: 400
    end
  end

  def update
    @user = User.find(params[:id])

    if params[:user][:seeker_profile][:skills]
      new_skills = params[:user][:seeker_profile][:skills].map do |skill_id|
        Skill.find(skill_id)
      end
      @user.seeker_profile.skills.replace(new_skills)
    end

    if @user.update(user_params)
      render json: @user, serializer: UserSpecificSerializer, include: ['seeker_profile.matched_jobs']
    else
      render json: @user.errors.full_messages, status: 400
    end
  end

  def destroy
  end

  def show
    @user = User.find(params[:id])
    render json: @user, serializer: UserSpecificSerializer, include: ['seeker_profile.matched_jobs']
  end

  private

  def user_params
    params.require(:user).permit(:username, :password, :location, :about, seeker_profile_attributes: [:first_name, :last_name], employer_profile_attributes: [:company_name])
  end

  def require_self
    unless @user == current_user
      render json: ["You cannot update an account that is not your own."]
    end
  end
end
