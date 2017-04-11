class SeekerProfile < ApplicationRecord

  belongs_to :user, optional: true
  has_many :skillings, as: :skillable
  has_many :skills, through: :skillings

  validates :first_name, :last_name, presence: true

  private

  def matched_jobs
    skills.map{ |skill| skill.jobs }.flatten.uniq
    # skills.include jobs
  end
end
