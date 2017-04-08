class UserSerializer < ActiveModel::Serializer
  attributes :id, :username, :about, :location

  has_one :seeker_profile
  has_one :employer_profile

end
