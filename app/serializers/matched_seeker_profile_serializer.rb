class MatchedSeekerProfileSerializer < ActiveModel::Serializer
  attributes :id, :first_name, :last_name, :email, :phone, :skills, :work_history, :education, :interests, :preferred_contact, :location, :avatar, :about

  def skills
    object.skills
  end

  def location
    object.user.location.name
  end

  def avatar
    object.user.avatar
  end

  def about
    object.user.about
  end

  has_many :matched_jobs
end
