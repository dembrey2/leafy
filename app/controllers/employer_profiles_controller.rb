class EmployerProfilesController < ApplicationController

  def index
    @employers = EmployerProfile.all
    render json: @employers
  end

  def show
    if params[:job_id]
      job = Job.find(params[:job_id])
      @employer_profile = job.employer_profile
    else
      @employer_profile = EmployerProfile.find(params[:id])
    end
    render json: @employer_profile
  end

  def update
    @employer_profile = EmployerProfile.find(params[:id])

    if @employer_profile.update(employer_params)
      render json: @employer_profile
    else
      render json: @employer_profile.errors.full_messages, status: 400
    end
  end

  private

  def employer_params
    params.require(:employer_profile).permit(:company_name, :website, :contact_name, :contact_email, :contact_phone, user_attributes: [:id, :location_id, :about])
  end
end
