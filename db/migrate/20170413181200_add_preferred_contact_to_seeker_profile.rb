class AddPreferredContactToSeekerProfile < ActiveRecord::Migration[5.0]
  def change
    add_column :seeker_profiles, :preferred_contact, :string
  end
end
