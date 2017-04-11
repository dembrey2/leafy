class AddEducationToSeekerProfile < ActiveRecord::Migration[5.0]
  def change
    add_column :seeker_profiles, :education, :text
    add_column :seeker_profiles, :work_history, :text
    add_column :seeker_profiles, :interests, :text
  end
end
