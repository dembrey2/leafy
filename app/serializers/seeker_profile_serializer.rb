class SeekerProfileSerializer < ActiveModel::Serializer
  attributes :id, :first_name, :last_name, :email, :phone, :username, :about, :location, :location_id

  def username
    object.user.username
  end

  def about
    object.user.about
  end

  def location
    object.user.location.name
  end

  def location_id
    object.user.location.id
  end
end
