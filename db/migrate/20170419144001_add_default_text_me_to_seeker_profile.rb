class AddDefaultTextMeToSeekerProfile < ActiveRecord::Migration[5.0]
  def change
    change_column :seeker_profiles, :text_me, :boolean, default: false
  end
end
