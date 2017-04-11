class UserSpecificSerializer < ActiveModel::Serializer
  attributes :id, :username, :about, :location, :token, :role

  has_one :employer_profile
  has_one :seeker_profile


  def location
    { id: object.location.id, name: object.location.name } if object.location
  end

  def role
    if object.seeker_profile
      "seeker"
    elsif object.employer_profile
      "employer"
    else
      "no role"
    end
  end
end
