class Job < ApplicationRecord

  belongs_to :employer_profile
  belongs_to :location
  has_many :skillings, as: :skillable, inverse_of: :skillable
  has_many :skills, through: :skillings, inverse_of: :skillings

  validates :title, :description, :active, presence: true

  default_scope { order(created_at: :desc) }

  def matched_seekers
    skills.flat_map{|skill| skill.seeker_profiles}.uniq
  end

  def set_skills_and_location(params)

    if params.dig(:job, :location_id)
      location = Location.find(params[:job][:location_id])
    end

    if params.dig(:job, :skills)
      new_skills = params[:job][:skills].split(",").map{|skill_id| Skill.find(skill_id.to_i)}
      skills.replace(new_skills)
    end
  end

  def owner
    employer_profile.user
  end

end
