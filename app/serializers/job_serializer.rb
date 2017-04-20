class JobSerializer < ActiveModel::Serializer
  attributes :id, :title, :description, :transportation, :active, :user_id, :company_name, :skills, :avatar, :contact_name, :contact_email, :contact_phone

  def company_name
    object.employer_profile.company_name
  end

  # def location
  #   object.location.name if object.location
  # end

  def skills
    object.skills if object.skills
  end

  def user_id
    object.employer_profile.user_id
  end

  def avatar
    object.employer_profile.user.avatar
  end

  def contact_name
    object.employer_profile.contact_name
  end

  def contact_email
    object.employer_profile.contact_email
  end

  def contact_phone
    object.employer_profile.contact_phone
  end

  belongs_to :location
end
