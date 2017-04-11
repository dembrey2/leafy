class ApplicationController < ActionController::API

  def current_user
    @current_user || User.find_by(token: params[:token]) if params[:token]
  end

  def require_user
    unless current_user
      render json: ["You need to be logged in to do that."]
    end
  end

  def require_seeker
    unless current_user.seeker_profile
      render json: ["You need to be logged in as a job seeker to do that."]
    end
  end

  def require_employer
    unless current_user.employer_profile
      render json: ["You need to be logged in as an employer to do that."]
    end
  end
end
