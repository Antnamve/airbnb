class AddIndexToAmenityProperties < ActiveRecord::Migration[7.1]
  def change
    add_index :property_amenities, [:property_id, :amenity_id], unique: true
  end
end
