class CreateJobs < ActiveRecord::Migration[5.0]
  def change
    create_table :jobs do |t|
      t.string :title
      t.text :description
      t.boolean :transportation
      t.boolean :active
      t.references :employer_profile, foreign_key: true
      t.references :location, foreign_key: true

      t.timestamps
    end
  end
end
