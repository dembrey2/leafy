class SeekerProfile < ApplicationRecord

  belongs_to :user
  has_many :skillings, as: :skillable
  has_many :skills, through: :skillings

  validates :first_name, :last_name, presence: true
end
