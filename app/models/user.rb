class User < ApplicationRecord

  belongs_to :location, optional: true
  has_one :seeker_profile, inverse_of: :user
  has_one :employer_profile, inverse_of: :user

  validates :username, presence: true, uniqueness: true

  has_secure_password
  has_secure_token

  accepts_nested_attributes_for :seeker_profile, :allow_destroy => true
  accepts_nested_attributes_for :employer_profile, :allow_destroy => true

  mount_uploader :avatar, AvatarUploader

  def set_skills_and_location(params, user)
    if params.dig(:user, :seeker_profile_attributes, :skills)
      new_skills = params[:user][:seeker_profile_attributes][:skills].split(",").flatten.map do |skill_id|
        Skill.find(skill_id.to_i)
      end
      user.seeker_profile.skills.replace(new_skills)
    end

    if params.dig(:user, :location_id)
      user.location = Location.find(params[:user][:location_id])
    end
  end

end
