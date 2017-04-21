class SessionsController < ApplicationController
  include ActionController::MimeResponds


  def static
    respond_to do |format|
      format.html {
        render html: File.open("#{Rails.root}/public/index.html").read.html_safe
      }
    end
  end

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
