class AddIndexToSkillings < ActiveRecord::Migration[5.0]
  def change
    add_index :skillings, [:skillable_id, :skillable_type]
  end
end
