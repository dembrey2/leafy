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

  def find_matched_seekers(job)
    job.matched_seekers.each{|seeker| JobMailer.job_match_email(seeker).deliver if seeker.email}
  end

  # def notify_via_text
  #   boot_twilio
  #   sms = @client.messages.create({
  #     from: ENV['twilio_number'],
  #     to: ENV['twilio_send_to'],
  #     body: "A new job matching your skills has posted."
  #   })
  # end

  # private
  #
  # def boot_twilio
  #   account_sid = ENV['twilio_sid']
  #   auth_token = ENV['twilio_token']
  #   @client = Twilio::REST::Client.new account_sid, auth_token
  # end
end
