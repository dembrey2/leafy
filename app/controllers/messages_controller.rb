class MessagesController < ApplicationController

  def notify
    boot_twilio
    sms = @client.messages.create({
      from: ENV['twilio_number'],
      to: ENV['twilio_send_to'],
      body: "A new job matching your skills has posted."
    })
    render plain: sms.sid
  end

  private

  def boot_twilio
    account_sid = ENV['twilio_sid']
    auth_token = ENV['twilio_token']
    @client = Twilio::REST::Client.new account_sid, auth_token
  end
end
