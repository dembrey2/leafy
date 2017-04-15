class Location < ApplicationRecord

  validates :name, presence: true
  has_many :users, inverse_of: :location
  has_many :jobs
end
