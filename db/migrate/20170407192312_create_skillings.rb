class CreateSkillings < ActiveRecord::Migration[5.0]
  def change
    create_table :skillings do |t|
      t.references :skill, foreign_key: true
      t.integer :skillable_id
      t.string :skillable_type

      t.timestamps
    end
  end
end
