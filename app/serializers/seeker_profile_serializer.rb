class SeekerProfileSerializer < ActiveModel::Serializer
  attributes :id, :first_name, :last_name, :email, :phone, :matched_jobs, :skills

  def skills
    object.skills
  end

  belongs_to :user
  # has_many :skills
end
