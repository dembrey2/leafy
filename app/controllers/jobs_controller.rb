class JobsController < ApplicationController

  before_action :require_user, only: [:index, :show, :create, :update]
  before_action :require_employer, only: [:create, :update]
  before_action :require_self, only: [:update]

  def index
    if current_user.employer_profile
      @jobs = current_user.employer_profile.jobs
    else
      @jobs = current_user.seeker_profile.matched_jobs
    end
    render json: @jobs
  end

  def show
    if current_user.employer_profile
      @job = current_user.employer_profile.jobs.find(params[:id])
      render json: @job, serializer: EmployerJobViewSerializer
    else
      @job = Job.find(params[:id])
      if current_user.seeker_profile.matched_jobs.include?(@job)
        render json: @job
      else
        render json: ["This job does not exist."], status: 404
      end
    end
  end

  def create
    @job = Job.new(job_params)
    current_user.employer_profile.jobs << @job

    @job.set_skills_and_location(params)

    if @job.save
      find_matched_seekers(@job)
      notify_via_text(@job)
      render json: @job
    else
      render json: @job.errors.full_messages, status: 400
    end
  end

  def update
    @job = Job.find(params[:id])

    @job.set_skills_and_location(params)

    if @job.update(job_params)
      render json: @job
    else
      render json: @job.errors.full_messages, status: 400
    end
  end

  private

  def job_params
    params.require(:job).permit(:title, :description, :transportation, :active, :location_id)
  end

  def require_self
    unless @user == current_user
      render json: ["You cannot update a job that is not your own."]
    end
  end

  def find_matched_seekers(job)
    job.matched_seekers.each{|seeker| JobMailer.job_match_email(seeker).deliver if seeker.email && seeker.email_me?}
  end

  def notify_via_text(job)
    job.matched_seekers.each do |seeker|
      if seeker.phone && seeker.text_me?
        boot_twilio
        @client.messages.create({
          from: ENV['twilio_number'],
          to: ENV['twilio_send_to'],
          body: "A new job matching your skills has posted."
        })
      end
    end
  end

  def boot_twilio
    account_sid = ENV['twilio_sid']
    auth_token = ENV['twilio_token']
    @client = Twilio::REST::Client.new account_sid, auth_token
  end
end
