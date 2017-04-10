class JobsController < ApplicationController

  def index
    @jobs = Job.all
    render json: @jobs
  end

  def show
    @job = Job.find(params[:id])
    render json: @job
    # if params[:skill_id]
    #   skill = Skill.find(params[:skill_id])
    #   @job = skill.jobs.find(params[:id])
    #   render json: @job
    # elsif params[:employer_profile_id]
    #   employer_profile = EmployerProfile.find(params[:employer_profile_id])
    #   @job = employer_profile.jobs.find(params[:id])
    #   @seeker_profiles = @job.skills.map{ |skill| skill.seeker_profiles.each{ |seeker| seeker }}.flatten.uniq
    #   render json: { :job => @job, :seeker_profiles => @seeker_profiles }
    # else
    #   render json: ["Job not found"], status: 404
    # end
  end

  def update
  end
end
