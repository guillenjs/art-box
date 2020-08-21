class FavoriteSerializer < ActiveModel::Serializer
  attributes :id, :artwork_id, :collector_id
  has_one :artwork
  # has_one :collector
end
