class SeekerProfile < ApplicationRecord

  belongs_to :user, optional: true
  has_many :skillings, as: :skillable, inverse_of: :skillable
  has_many :skills, through: :skillings

  validates :first_name, :last_name, presence: true

  def matched_jobs
    skills.map{ |skill| skill.jobs }.flatten.uniq
    # skills.includes jobs
  end
end
