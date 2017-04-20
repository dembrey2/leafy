FactoryGirl.define do
  factory :employer_profile do
    company_name {Faker::LordOfTheRings.unique.location}
    website {Faker::Internet.url}
    contact_name {Faker::LordOfTheRings.character}
    contact_phone {Faker::PhoneNumber.phone_number}
    contact_email {Faker::Internet.safe_email}
    user
  end

  # transient do
  #   job_count 5
  # end
  #
  # factory :employer_profile_with_jobs do
  #   after(:create) do |job, evaluator|
  #     evaluator.job_count.times do
  #
end
