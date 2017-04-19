class SessionsController < ApplicationController

  def create
    if params[:user]
      @user = User.find_by(username: params[:user][:username])&.authenticate(params[:user][:password])
      if @user
        render json: @user, serializer: UserSpecificSerializer, include: ['employer_profile.jobs',
        'seeker_profile.matched_jobs']
      else
        render json: ["Incorrect credentials"], status: 401
      end
    else
      render json: ["Please log in."], status: 404
    end
  end

end
