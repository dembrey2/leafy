class EmployerProfileSerializer < ActiveModel::Serializer

  belongs_to :user
  attributes :id, :company_name, :website, :contact_name, :contact_phone, :contact_email
end
