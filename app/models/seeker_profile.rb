class SeekerProfile < ApplicationRecord

  belongs_to :user, optional: true
  has_many :skillings, as: :skillable
  has_many :skills, through: :skillings

  validates :first_name, :last_name, presence: true

  accepts_nested_attributes_for :user

  def matched_jobs
    self.skills.map{ |skill| skill.jobs }.flatten.uniq
  end
end
