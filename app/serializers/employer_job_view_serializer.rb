class EmployerJobViewSerializer < ActiveModel::Serializer
  attributes :id, :title, :description, :transportation, :active, :user, :company_name, :skills

  def company_name
    object.employer_profile.company_name
  end

  # def location
  #   object.location.name if object.location
  # end

  def skills
    object.skills if object.skills
  end

  def user
    object.employer_profile.user
  end

  has_many :matched_seekers, serializer: MatchedSeekerProfileSerializer
  belongs_to :location
end
