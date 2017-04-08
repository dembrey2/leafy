class SeekerProfilesController < ApplicationController

  def index
    @seeker_profiles = SeekerProfile.all
    render json: @seeker_profiles
  end

  def show
    @seeker_profile = SeekerProfile.find(params[:id])
    render json: @seeker_profile
  end



  private

  def seeker_params
    params.require(:seeker_profile).permit(:first_name, :last_name, :email, :phone)
  end
end

# only needed for update action
# if params[:seeker_profile][:skills]
#   params[:seeker_profile][:skills].each do |skill_id|
#     skill = Skill.find(skill_id)
#     @seeker_profile.skills << skill
#   end
# end
