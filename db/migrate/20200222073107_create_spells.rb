class CreateSpells < ActiveRecord::Migration[6.0]
  def change
    create_table :spells do |t|
      t.string :name
      t.integer :wizard_id

      t.timestamps
    end
  end
end
