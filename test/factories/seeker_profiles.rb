FactoryGirl.define do
  factory :seeker_profile do
    first_name {Faker::Name.first_name}
    last_name {Faker::Name.last_name}
    email {Faker::Internet.safe_email}
    phone {Faker::PhoneNumber.phone_number}
    user
  end
end
