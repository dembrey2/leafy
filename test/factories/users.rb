FactoryGirl.define do
  factory :user do
    username {Faker::Cat.unique.name}
    password "cupcakes"
  end
end
