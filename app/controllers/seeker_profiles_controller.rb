class SeekerProfilesController < ApplicationController

  def index
    if params[:skill_id]
      skill = Skill.find(params[:skill_id])
      @seeker_profiles = skill.seeker_profiles
    else
      @seeker_profiles = SeekerProfile.all
    end
    render json: @seeker_profiles
  end

  def show
    @seeker_profile = SeekerProfile.find(params[:id])
    render json: @seeker_profile
  end

  def update
    @seeker_profile = SeekerProfile.find(params[:id])

    if params[:seeker_profile][:skills]
      new_skills = params[:seeker_profile][:skills].map do |skill_id|
        SeekerProfile.find(skill_id)
      end
      @seeker_profile.skills.replace(new_skills)
    end

    if @seeker_profile.update(seeker_params)
      @user = @seeker_profile.user
      render json: @user
    else
      render json: @seeker_profile.errors.full_messages, status: 400
    end

  end

  private

  def seeker_params
    params.require(:seeker_profile).permit(:first_name, :last_name, :email, :phone, user_attributes: [:id, :location_id, :about])
  end
end
