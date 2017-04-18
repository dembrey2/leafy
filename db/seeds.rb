# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

skills_array = ["Health", "General Office", "Computer Skills", "Construction & Repair", "Maintenance", "Janitorial & Housekeeping", "Languages", "Food", "Child Care", "Transportaion", "Operating Equipment & Repairing Machinery", "Supervision", "Retail & Sales", "Animal Care", "Music", "Security", "Landscaping", "Other"]

skills_array.each do |skill|
  Skill.create!(name: skill)
end

locations_array = ["Downtown Bloomington", "North Bloomington", "South Bloomington", "East Bloomington", "West Bloomington", "Greater Monroe County"]

locations_array.each do |location|
  Location.create!(name: location)
end


5.times do
  seeker_profile = SeekerProfile.create!(
    first_name: Faker::Name.first_name,
    last_name: Faker::Name.last_name,
    email: Faker::Internet.safe_email,
    phone: Faker::PhoneNumber.phone_number,
    education: Faker::ChuckNorris.fact,
    work_history: Faker::HarryPotter.quote,
    interests: Faker::TwinPeaks.quote,
    user: User.create!(
      username: Faker::Cat.unique.name,
      password: "cupcakes",
      location: Location.all.sample,
      about: Faker::StarWars.quote,
      avatar: Rails.root.join("public/img/lovelace.jpg").open
      )
  )
  seeker_profile.skills << Skill.all.sample(3)
end

5.times do
  employer_profile = EmployerProfile.create!(
    company_name: Faker::LordOfTheRings.unique.location,
    contact_name: Faker::LordOfTheRings.character,
    contact_phone: Faker::PhoneNumber.phone_number,
    user: User.create!(
      username: Faker::Ancient.unique.god,
      password: "cupcakes",
      location: Location.all.sample,
      about: Faker::Company.bs,
      avatar: Rails.root.join("public/img/lovelace.jpg").open
      )
  )
  3.times do
    job = Job.create!(
      title: Faker::Company.profession,
      description: Faker::Company.bs,
      transportation: false,
      active: true,
      location: Location.all.sample,
      employer_profile: employer_profile
    )
    job.skills << Skill.all.sample(3)
  end
end

User.create!(username: "admin", password: "cupcakes", admin: true)
