class UserSpecificSerializer < ActiveModel::Serializer
  attributes :id, :username, :about, :location, :token

  has_one :seeker_profile
  has_one :employer_profile

  def location
    { id: object.location.id, name: object.location.name } if object.location
  end
end