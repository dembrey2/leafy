class CreateEmployerProfiles < ActiveRecord::Migration[5.0]
  def change
    create_table :employer_profiles do |t|
      t.string :company_name
      t.string :website
      t.string :contact_name
      t.string :contact_phone
      t.string :contact_email

      t.timestamps
    end
  end
end
