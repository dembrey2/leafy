class AddEmailMeToSeekerProfile < ActiveRecord::Migration[5.0]
  def change
    add_column :seeker_profiles, :email_me, :boolean
  end
end
