class JobSerializer < ActiveModel::Serializer
  attributes :id, :title, :description, :transportation, :active

  has_one :employer_profile
  has_one :location
  has_many :skills
end
