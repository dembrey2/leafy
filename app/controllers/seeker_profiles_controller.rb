class SeekerProfilesController < ApplicationController

  def index
    @seeker_profiles = SeekerProfile.all
    render json: @seeker_profiles
  end

  def create

    # @user = User.new(user_params)
    @seeker_profile = SeekerProfile.new(seeker_params)
    if @seeker_profile.save!
      render json: @seeker_profile
    else
      render json: @seeker_profile.errors.full_messages, status: 400
    end
    # @seeker_profile.user = @user
    #
    # if @seeker_profile.valid?
    #   render json: ["HOORAY"], status: 200
    # else
    #   render json: ["YYYYY"], status: 400
    # end
    # user = User.new(
    #   username: params[:seeker_profile][:user][:username],
    #   password: params[:seeker_profile][:user][:password])
  #   if @seeker_profile.valid? && @user.valid?
  #     if @user.save?
  #       @seeker_profile.user = @user
  #       if @seeker_profile.save?
  #         render json: @seeker_profile
  #       else
  #         render json: @seeker_profile.errors.full_messages, status: 400
  #       end
  #     else
  #       render json: user.errors.full_messages, status: 400
  #     end
  #   else
  #     render json: ["Try again."], status: 400
  #   end
  end

  def show
    @seeker_profile = SeekerProfile.find(params[:id])
    render json: @seeker_profile
  end



  private

  def seeker_params
    params.require(:seeker_profile).permit(:first_name, :last_name, :email, :phone, user_attributes: [:username, :password])
  end
end

# only needed for update action
# if params[:seeker_profile][:skills]
#   params[:seeker_profile][:skills].each do |skill_id|
#     skill = Skill.find(skill_id)
#     @seeker_profile.skills << skill
#   end
# end
