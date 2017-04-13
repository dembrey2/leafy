class Job < ApplicationRecord

  belongs_to :employer_profile
  belongs_to :location
  has_many :skillings, as: :skillable
  has_many :skills, through: :skillings

  validates :title, :description, :active, presence: true

  def matched_seekers
    skills.flat_map{|skill| skill.seeker_profiles}.uniq
  end
end
