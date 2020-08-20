class CollectorSerializer < ActiveModel::Serializer
  attributes :id, :name, :location, :phone_number
  
# has_many :artworks
 
end
