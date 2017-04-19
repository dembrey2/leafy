class RemoveResetFromUsers < ActiveRecord::Migration[5.0]
  def change
    remove_column :users, :reset_digest, :string
  end
end
