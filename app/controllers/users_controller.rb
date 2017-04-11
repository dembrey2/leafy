class UsersController < ApplicationController

  before_action :find_user, only: [:update, :show]
  before_action :require_user, only: [:index, :update, :show]
  before_action :require_self, only: [:update]

  def index
    @users = User.all
    render json: @users
  end

  def create
    @user = User.new(user_params)
    if @user.save!
      render json: @user, serializer: UserSpecificSerializer, include: ['employer_profile.jobs', 'seeker_profile.matched_jobs']
    else
      render json: @user.errors.full_messages, status: 400
    end
  end

  def update

    # if params[:user][:seeker_profile_attributes]
      if params[:user][:seeker_profile_attributes][:skills]
        new_skills = params[:user][:seeker_profile_attributes][:skills].map do |skill_id|
          Skill.find(skill_id)
      end
      @user.seeker_profile.skills.replace(new_skills)
    end

    if @user.update(user_params)
      render json: @user, serializer: UserSpecificSerializer, include: ['employer_profile.jobs', 'seeker_profile.matched_jobs']
    else
      render json: @user.errors.full_messages, status: 400
    end
  end

  def destroy
  end

  def show
    render json: @user, serializer: UserSpecificSerializer, include: ['employer_profile.jobs', 'seeker_profile.matched_jobs']
  end

  private

  def user_params
    params.require(:user).permit(:username, :password, :location, :about, seeker_profile_attributes: [:id, :first_name, :last_name, :skills], employer_profile_attributes: [:company_name])
  end

  def require_self
    unless @user == current_user
      render json: ["You cannot update an account that is not your own."]
    end
  end

  def find_user
    @user = User.find(params[:id])
  end
end
