class AddDefaultToSeekerProfile < ActiveRecord::Migration[5.0]
  def change
    change_column :seeker_profiles, :email_me, :boolean, default: false
  end
end
