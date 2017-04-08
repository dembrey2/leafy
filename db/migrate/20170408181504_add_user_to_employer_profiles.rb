class AddUserToEmployerProfiles < ActiveRecord::Migration[5.0]
  def change
    add_reference :employer_profiles, :user, foreign_key: true
  end
end
