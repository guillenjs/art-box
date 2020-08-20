class CreateArtworks < ActiveRecord::Migration[6.0]
  def change
    create_table :artworks do |t|
      t.string :name
      t.integer :price
      t.string :medium
      t.string :image
      t.boolean :availability
      t.string :dimension
      t.references :artist, null: false, foreign_key: true
      

      t.timestamps
    end
  end
end
