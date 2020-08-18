class ArtworkSerializer < ActiveModel::Serializer
  attributes :id, :name, :price, :medium, :image, :dimension, :artist_id, :collector_id
end
