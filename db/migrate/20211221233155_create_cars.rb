class CreateCars < ActiveRecord::Migration[6.1]
  def change
    create_table :cars do |t|
      t.text :details
      t.boolean :status
      t.integer :current_user_id
      t.integer :host_id

      t.timestamps
    end
  end
end
