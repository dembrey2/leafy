class AddDefaultToJobs < ActiveRecord::Migration[5.0]
  def change
    change_column :jobs, :active, :boolean, default: true
  end
end
