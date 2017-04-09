class JobsController < ApplicationController

  def index
    @jobs = Job.all
    render json: @jobs
  end

  def show
    if params[:skill_id]
      skill = Skill.find(params[:skill_id])
      @job = skill.jobs.find(params[:id])
      render json: @job
    elsif params[:employer_profile_id]
      employer_profile = EmployerProfile.find(params[:employer_profile_id])
      @job = employer_profile.jobs.find(params[:id])
      render json: @job
    else
      render json: ["Job not found"], status: 404
    end
  end

  def update
  end
end
