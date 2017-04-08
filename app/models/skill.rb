class Skill < ApplicationRecord

  has_many :skillings
  has_many :skillable, through: :skillings
  has_many :seeker_profiles, through: :skillings, source: :skillable, :source_type => "SeekerProfile"
  has_many :jobs, through: :skillings, source: :skillable, :source_type => "Job"
end
