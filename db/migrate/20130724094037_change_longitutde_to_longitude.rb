class ChangeLongitutdeToLongitude < ActiveRecord::Migration
  def change
    rename_column :pins, :longitutde, :longitude
  end
end
