class CollectorSerializer < ActiveModel::Serializer
  attributes :id, :location, :phone_number
  
  has_many :artworks
  has_many :artists
end
