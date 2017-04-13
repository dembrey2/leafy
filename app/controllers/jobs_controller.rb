class JobsController < ApplicationController

  before_action :require_user, only: [:index, :show]
  before_action :require_employer, only: [:create, :update]

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
    @job.employer_profile.user = current_user
    if @job.save
      render json: @job
    else
      render json: @job.errors.full_messages, status: 400
    end
  end

  def update
    @job = Job.find(params[:id])
    @job.employer_profile.user = current_user

    if params.dig(:job, :location)
      @job.location = Location.find(params[:location][:id])
    end

    if params.dig(:job, :skills)
      new_skills = params[:job][:skills].map{|skill_id| Skill.find(skill_id)}
      @job.skills.replace(new_skills)
    end

    if @job.update(job_params)
      render json: @job
    else
      render json: @job.errors.full_messages, status: 400
    end
  end

  private

  def job_params
    params.require(:job).permit(:title, :description, :transportation, :active, :location, :skills)
  end
end
