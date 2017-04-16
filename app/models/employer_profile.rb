class EmployerProfile < ApplicationRecord

  belongs_to :user, optional: true, inverse_of: :employer_profile
  has_many :jobs, inverse_of: :employer_profile

  validates :company_name, presence: true, uniqueness: true

  accepts_nested_attributes_for :user
end
