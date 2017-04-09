class SeekerProfileSerializer < ActiveModel::Serializer
  attributes :id, :first_name, :last_name, :email, :phone

  belongs_to :user
end
