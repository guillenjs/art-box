class Collector < ApplicationRecord
    has_many :artworks
    has_many :artist, through: :artworks

end
