class UserSerializer < ActiveModel::Serializer
  attributes :id, :username, :about, :profile

  def profile
    if user.seeker_profile
      seeker_profile
    else
      employer_profile
    end
  end
  
end
