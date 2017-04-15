class Skill < ApplicationRecord

  has_many :skillings, inverse_of: :skill
  has_many :skillable, through: :skillings, source_type: "Skill"
  has_many :seeker_profiles, through: :skillings, source: :skillable, source_type: "SeekerProfile"
  has_many :jobs, through: :skillings, source: :skillable, source_type: "Job"
end
