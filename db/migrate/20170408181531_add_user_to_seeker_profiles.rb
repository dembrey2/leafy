class AddUserToSeekerProfiles < ActiveRecord::Migration[5.0]
  def change
    add_reference :seeker_profiles, :user, foreign_key: true
  end
end
