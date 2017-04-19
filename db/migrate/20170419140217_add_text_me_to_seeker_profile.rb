class AddTextMeToSeekerProfile < ActiveRecord::Migration[5.0]
  def change
    add_column :seeker_profiles, :text_me, :boolean
  end
end
