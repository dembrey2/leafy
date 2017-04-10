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
    if params[:skill_id]
      skill = Skill.find(params[:skill_id])
      @seeker_profile = skill.seeker_profiles.find(params[:id])
      render json: @seeker_profile
    else
      @seeker_profile = SeekerProfile.find(params[:id])
      @jobs = @seeker_profile.skills.map{ |skill| skill.jobs }.flatten.uniq
      render json: { :seeker_profile => @seeker_profile, :jobs => @jobs }
    end
  end

  def update
    @seeker_profile = SeekerProfile.find(params[:id])

    if params[:seeker_profile][:skills]
      new_skills = params[:seeker_profile][:skills].map do |skill_id|
        Skill.find(skill_id)
      end
      @seeker_profile.skills.replace(new_skills)
    end

    if @seeker_profile.update(seeker_params)
      render json: @seeker_profile
    else
      render json: @seeker_profile.errors.full_messages, status: 400
    end

  end

  private

  def seeker_params
    params.require(:seeker_profile).permit(:first_name, :last_name, :email, :phone, user_attributes: [:id, :location_id, :about])
  end
end
