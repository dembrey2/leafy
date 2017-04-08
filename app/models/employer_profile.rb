class EmployerProfile < ApplicationRecord

  belongs_to :user, optional: true
  has_many :jobs

  validates :company_name, presence: true, uniqueness: true
end
