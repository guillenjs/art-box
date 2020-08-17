class ArtworkSerializer < ActiveModel::Serializer
  attributes :id, :name, :price, :medium, :image
end
