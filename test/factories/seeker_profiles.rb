FactoryGirl.define do
  factory :seeker_profile do
    first_name { Faker::Name.first_name }
    last_name { Faker::Name.last_name }
    email { Faker::Internet.safe_email }
    phone { Faker::PhoneNumber.phone_number }
    user
  end

  factory :seeker_profile_with_skills do
    transient do
      skill_count 3
    end
    after(:create) do |job, evaluator|
      evaluator.skill_count.times do
        seeker_profile.skills << Skill.sample(3)
      end
    end
  end
end
