class SeekerProfileSerializer < ActiveModel::Serializer

  belongs_to :user
  attributes :id, :first_name, :last_name, :email, :phone
end
