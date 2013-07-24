class AddPinsTable < ActiveRecord::Migration
  def change
    create_table :pins do |t|
      t.string :title
      t.text :address
      t.float :longitutde, :default => 0
      t.float :latitude, :default => 0
      t.integer :user_id
      t.integer :category_id
      t.timestamps
    end
  end
end
