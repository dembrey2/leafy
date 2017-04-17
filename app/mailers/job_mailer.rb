class JobMailer < ApplicationMailer

  def job_match_email(user)
    @user = user
    mail(to: @user.email, subject: 'New Job Listing')
  end
end
