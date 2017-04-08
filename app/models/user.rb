class User < ApplicationRecord

  belongs_to :location, optional: true
  has_one :seeker_profile
  has_one :employer_profile

  validates :username, presence: true, uniqueness: true

  has_secure_password
  has_secure_token

  accepts_nested_attributes_for :seeker_profile, :allow_destroy => true
  accepts_nested_attributes_for :employer_profile, :allow_destroy => true
end
