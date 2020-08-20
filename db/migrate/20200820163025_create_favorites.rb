class CreateFavorites < ActiveRecord::Migration[6.0]
  def change
    create_table :favorites do |t|
      t.references :artwork, null: false, foreign_key: true
      t.references :collector, null: false, foreign_key: true

      t.timestamps
    end
  end
end
