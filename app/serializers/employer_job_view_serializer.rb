class EmployerJobViewSerializer < ActiveModel::Serializer
  attributes :id, :title, :description, :transportation, :active, :user_id, :company_name, :location, :skills

  def company_name
    object.employer_profile.company_name
  end

  def location
    object.location.name if object.location
  end

  def skills
    object.skills if object.skills
  end

  def user_id
    object.employer_profile.user_id
  end

  has_many :matched_seekers
end
