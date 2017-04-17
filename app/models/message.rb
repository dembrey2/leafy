class Message

  def find_matched_seekers(job)
    matched_seekers.each{|seeker| JobMailer.job_match_email(seeker).deliver if seeker.email}
  end

  # def notify
  #   boot_twilio
  #   sms = @client.messages.create({
  #     from: ENV['twilio_number'],
  #     to: ENV['twilio_send_to'],
  #     body: "A new job matching your skills has posted."
  #   })
  #   render plain: sms.sid
  # end
  #
  # private
  #
  # def boot_twilio
  #   account_sid = ENV['twilio_sid']
  #   auth_token = ENV['twilio_token']
  #   @client = Twilio::REST::Client.new account_sid, auth_token
  # end
end
