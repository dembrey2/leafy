class EmployerProfileSerializer < ActiveModel::Serializer

  attributes :id, :company_name, :website, :contact_name, :contact_phone, :contact_email

  belongs_to :user
end
