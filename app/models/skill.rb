class Skill < ApplicationRecord

  has_many :skillings, inverse_of: :skill
  has_many :skillable, through: :skillings, inverse_of: :skilling
  # has_many :seeker_profiles, through: :skillings, source: :skillable, :source_type => "SeekerProfile", inverse_of: :skillable
  # has_many :jobs, through: :skillings, source: :skillable, :source_type => "Job", inverse_of: :skillable
end
