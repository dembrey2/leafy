class SeekerProfileSerializer < ActiveModel::Serializer
  
  attributes :id, :first_name, :last_name, :email, :phone, :skills, :work_history, :education, :interests, :preferred_contact, :text_me, :email_me

  def skills
    object.skills
  end

  has_many :matched_jobs
end
