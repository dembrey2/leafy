class UserSerializer < ActiveModel::Serializer
  attributes :id, :username, :about, :location, :role, :avatar

  has_one :seeker_profile
  has_one :employer_profile

  def location
    { id: object.location.id, name: object.location.name } if object.location
  end

  def role
    object.seeker_profile ? "seeker" : "employer"
  end

end
