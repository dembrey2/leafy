class JobSerializer < ActiveModel::Serializer
  attributes :id, :title, :description, :transportation, :active, :company_name, :location, :skills

  def company_name
    object.employer_profile.company_name
  end

  def location
    object.location.name if object.location
  end

  def skills
    object.skills if object.skills
  end

  # has_one :employer_profile
  # has_one :location
  # has_many :skills
end
