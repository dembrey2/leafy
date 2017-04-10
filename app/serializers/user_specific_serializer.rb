class UserSpecificSerializer < ActiveModel::Serializer
  attributes :id, :username, :about, :location, :token

  def location
    { id: object.location.id, name: object.location.name } if object.location
  end
end
